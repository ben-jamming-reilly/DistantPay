const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const stripe = require("stripe")(config.get("stripeSecret"));

const Order = require("../../models/Order");
const Item = require("../../models/Item");

// Give all paid & uncompleted orders
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ complete: false, paid: true });
    return res.json(orders);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// Complete certain orders
router.post("/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    let order = await Order.findById(id);
    if (!order)
      return res
        .status(404)
        .json({ errors: [{ msg: "Order does not exist." }] });

    order.complete = true;

    await order.save();
    return res.status(200);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const { name, items, total } = req.body;

  try {
    let confirmTotal = 0;

    for (let i = 0; i < items.length; i++) {
      const item = await Item.findById(items[i].id);
      if (!item)
        return res
          .status(404)
          .json({ errors: [{ msg: "Item does not exist." }] });

      confirmTotal += item.price * items[i].quantity;
    }

    if (confirmTotal !== total)
      return res.status(400).json({
        errors: [
          {
            msg: "Server price doesn't match client price, please try again.",
          },
        ],
      });

    if (items.length === 0)
      return res.status(400).json({
        errors: [
          {
            msg: "No empty purchases.",
          },
        ],
      });

    // Order has been confirmed

    const intent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    let order = new Order({
      name: name,
      total: total,
      items: items,
    });

    await order.save();

    return res.json({
      client_secret: intent.client_secret,
      intent_id: intent.id,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//handle payment confirmations
router.post("/confirm-payment", async (req, res) => {
  const { payment_type, payment_id, order_id } = req.body;
  try {
    let order = await Order.findById(order_id);

    if (!order)
      return res.status(404).json({
        errors: [
          {
            msg: "Order doesn't exist.",
          },
        ],
      });

    if (payment_type == "stripe") {
      stripe.paymentIntents.retrieve(payment_id, async (err, paymentIntent) => {
        if (err) {
          console.log(err);
        }

        //respond to the client that the server confirmed the transaction
        if (paymentIntent.status === "succeeded") {
          order.paid = true;
          await order.save();
          console.log("confirmed stripe payment: " + clientid);

          return res.json({ success: true });
        } else {
          return res.json({ success: false });
        }
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(404).json(err);
  }
});

module.exports = router;
