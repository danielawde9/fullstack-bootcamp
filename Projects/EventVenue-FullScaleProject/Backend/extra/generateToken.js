const jwt = require('jsonwebtoken');

exports.generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};
