// Home.js
import React from 'react';
import Thumb from '../components/Thumb';
import products from '../product.json';

function Home() {
  return (
    <div className='home'>
      <div className="banner-box">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="thumb-box">
        {products.map((product) => (
          <Thumb key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
