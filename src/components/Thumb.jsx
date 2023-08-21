// Thumb.js
import React from 'react';
import { Link } from 'react-router-dom';

function Thumb({ product }) {
  const thumbStyle = {
    backgroundImage: `url(${product.cover})`,
  };

  return (
    <Link to={`/product/${product.id}`} className="thumb-link" style={{ textDecoration: 'none' }}>
      <div className="thumb" style={thumbStyle}>
        <div className='thumb-titleBox' >
        <h3>{product.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Thumb;
