import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import image1 from '../../assets/banner1.jpg';
import image2 from '../../assets/banner2.jpeg';
import image3 from '../../assets/banner3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

const CarouselContainer = ({ t }) => {
  const images = [
    { img: image1, text: [t('description.image1')] },
    { img: image2, text: [t('description.image2')] },
    { img: image3, text: [t('description.image3')] }
  ];

  return (
    <div style={{ marginBottom: '80px' }}>
      <Carousel
        width="100%"
        className="main-slide"
        dynamicHeight
        emulateTouch
        infiniteLoop
        showThumbs={false}>
        {images.map((el, index) => {
          return (
            <div key={index} className="position-relative">
              <div className="banner-text-style">
                <h1>{el.text}</h1>
                <button style={{ fontWeight: 'normal' }} className="buy-button">
                  <Link to="/products"> {t('description.buyNow')} </Link>
                </button>
              </div>
              <img className="carousel-item-img" src={el.img} alt="main banner images" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
