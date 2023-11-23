const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Not auth credentials found' });
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: 'Unable to access token', message: 'Token not found!' });
  }

  try {
    const credentials = jwt.verify(token, process.env.JWT_SECRET);
    res.locals = credentials;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};
