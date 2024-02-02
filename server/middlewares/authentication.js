const Jwt = require("jsonwebtoken");

const createToken = async (user) => {
  return await Jwt.sign(user, "phatnehaha", { expiresIn: "1h" });
};

const verifyToken = async (token) => {
  try {
    return await Jwt.verify(token, "phatnehaha");
  } catch (error) {
    console.error("Error verifying JWT token:", error);
    return null;
  }
};

const jwtMiddleware = {
  createToken,
  verifyToken,
};

module.exports = jwtMiddleware;
