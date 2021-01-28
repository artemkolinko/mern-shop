import React from 'react';
import { Card } from 'react-bootstrap';
// Link component instead a tag (href = to)
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        {/* <Card.Text as='div'>{product.description}</Card.Text> */}
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h2'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
