import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRouters from './routes/productRouters.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRouters from './routes/userRouters.js';

dotenv.config();

connectDB();

const app = express();

// middleware example
// app.use((req, res, next) => {
//   console.log('hello');
//   console.log(req.originalUrl);
//   console.log(req.headers.connection);
//   console.log(req.headers['user-agent']);
//   // res.send(req.originalUrl);
//   next();
// });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/products', productRouters);
app.use('/api/users', userRouters);

// Error handler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT} go to http://localhost:${PORT}/api/products`
      .yellow
  )
);
