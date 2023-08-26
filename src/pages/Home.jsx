// Home.js
import React from 'react';
import Thumb from '../components/Thumb';
import products from '../product.json';
import Template from '../components/Template';

function Home() {
  return (
    <Template >
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
    </Template>
  );
}

export default Home;
