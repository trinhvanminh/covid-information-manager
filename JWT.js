const { sign, verify } = require("jsonwebtoken");
const createTokens = ({ username }) => {
  const accessToken = sign({ username: username }, "privatekeygoeshere", {
    expiresIn: "1h",
  });
  return accessToken;
};

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) return next();

  try {
    const validToken = verify(accessToken, "privatekeygoeshere");
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, verifyToken };
