import React from "react";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/banner1.jpg";
import image2 from "../../assets/banner2.jpeg";
import image3 from "../../assets/banner3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomePageCarousel.css";

const images = [
  { img: image1, text: "Խաղալիքների նոր հավաքածու" },
  { img: image2, text: "Գործվածքների մեծ ընտրանի" },
  { img: image3, text: "Փոքրիկների ամենափափուկ անկյունը" },
];

const Homepagecarusel = () => {
  return (
    <div style={{marginBottom:"80px"}}>
      <Carousel
        width="100%"
        className="main-slide"
        //   autoPlay
        dynamicHeight
        emulateTouch
        infiniteLoop
        showThumbs={false}
      >
        {images.map((el, index) => {
          return (
            <div key={index} className="position-relative">
              <div className="banner-text-style">
                <h1>{el.text}</h1>
                <button className="buy-button">Գնել հիմա</button>
              </div>
              <img
                className="carousel-item-img"
                src={el.img}
                alt="main banner images"
              />
              {/* <legend>asdasd</legend> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Homepagecarusel;
