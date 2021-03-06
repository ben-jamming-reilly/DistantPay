const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

module.exports = async function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  // verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;

    const user = await User.findById(req.user.id);
    if (!user.verified)
      return res
        .status(403)
        .json({ errors: [{ msg: "Your account hasn't been verified yet" }] });

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid Token" });
  }
};
