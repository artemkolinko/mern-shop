import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// нужно ли оборачивать в express-async-handler?
const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // .select('-password -email') - если с минусом, то все поля, кроме минусных
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error('No Authorized, Invalid token');
    }
  } else {
    res.status(401);
    throw new Error('No Authorized, No token');
  }
});

export default protect;
