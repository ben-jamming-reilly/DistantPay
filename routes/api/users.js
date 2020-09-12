const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

router.post("/login", async (req, res) => {
  const { user_name, password } = req.body;

  try {
    const user = await User.findOne({ user_name: user_name });
    if (!user)
      return res.status(400).json({ errors: [{ msg: "Invalid Email" }] });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ errors: [{ msg: "Invalid Password" }] });

    // Log user in

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 7200 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    return res.json(user);
  } catch (err) {
    console.err(err.message);
    return res.status(500).send("Server Error");
  }
});

router.post("/create", async (req, res) => {
  const { user_name, password } = req.body;
  try {
    let user = await User.findOne({ user_name: user_name });
    if (user)
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });

    // Save user
    user = new User({
      user_name: user_name,
      password: password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    // Send a message to user that their account has been created
    return res.status(201).json({
      msg:
        "Your account has been created, please standby until another user verifies you.",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

router.post("/modify/:id", auth, async (req, res) => {
  const { verified } = req.body;
  try {
    let user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ errors: [{ msg: "User doesn't exist" }] });

    user.verified = verified;
    user.save();

    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

router.post("/admin", async (req, res) => {
  const admin = {
    user_name: "benreilly",
    password: "",
    verified: true,
  };
  try {
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
