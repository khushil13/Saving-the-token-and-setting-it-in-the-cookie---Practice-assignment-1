const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_secret_key";
const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return { error: "Invalid or expired token" };
  }
};

module.exports = {
  encrypt,
  decrypt
}
