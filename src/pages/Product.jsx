// Product.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../product.json';
import Dropdown from '../components/Dropdown';
import arrowCarousel from '../assets/arrowCarousel.svg';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); //déclare une variable d'état et une fonction pour mettre à jour cette variable

  useEffect(() => {
    const productExists = products.some((item) => item.id === id);

    if (!productExists) {
      console.log('Product not found');
      navigate("/error");
    } else {
      const foundProduct = products.find((item) => item.id === id);
      setProduct(foundProduct);
    }
  }, [id, navigate]);

  if (!product) {
    return <p>Loading...</p>;
  }

  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
        key={i}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill={i <= rating ? "#f05454" : "#E3E3E3"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" />
      </svg>

      );
    }
    return stars;
  }
  function EquipmentList({ equipments }) {
    return (
      <ul>
        {equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>
    );
  }

  const nextImage = () => {
    if (currentIndex === product.pictures.length - 1) {
        setCurrentIndex(0);
    } else {
        setCurrentIndex(currentIndex + 1);
    }
};

const prevImage = () => {
    if (currentIndex === 0) {
        setCurrentIndex(product.pictures.length - 1);
    } else {
        setCurrentIndex(currentIndex - 1);
    }
};
  const carouselImageStyle = {
    backgroundImage: `url(${product.pictures[currentIndex]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '415px', 
    position: 'relative',
    transition : 'all 500ms ease-out',
    borderRadius : '25px'
  };

  var actualIndex = currentIndex + 1;
  return (
    <div className="product-page">
      <div className="carousel">
      {product.pictures.length > 1 && <button onClick={prevImage}><img src={arrowCarousel} alt="arrowCarousel" /></button>}
        <div style={carouselImageStyle} className='carousel-bg' />
        <div className='currentIndex' >
            {product.pictures.length > 1 ? `${actualIndex}/${product.pictures.length}` : null}
        </div>
        {product.pictures.length > 1 && <button className="carousel-rightButton" onClick={nextImage}><img src={arrowCarousel} alt="arrowCarousel" /></button>}
      </div>
      <div className='product-box'>
        <div className='headerProduct'>
          <div className='headerProduct-left'>
            <h2>{product.title}</h2>
            <p>{product.location}</p>
            <div className='headerProduct-left-tags'>
              {product.tags.map((tag, index) => (
                <div key={index}>{tag}</div>
              ))}
            </div>
          </div>

          <div className='headerProduct-right'>
            <div>
              <span>
              {product.host.name}
              </span>
                <img src={product.host.picture} alt="" />
            </div>
            <div>
            {renderStars(product.rating)}
            </div>
          </div>
        </div>
        <div className='product-collapse' >
            <Dropdown title="Description" content={product.description} />
            <Dropdown title="Équipements" content={<EquipmentList equipments={product.equipments} />} />

          </div>
      </div>
      
    </div>
  );
}

export default Product;
