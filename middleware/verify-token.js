// middleware/verify-token.js

const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  
  try {
    
    console.log(req.headers); // testing
    console.log(req.headers.authorization); // testing
    
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.payload;

    next();
  } catch (err) {
    res.status(401).json({ err: 'Invalid token.' });
  };
};

module.exports = verifyToken;
