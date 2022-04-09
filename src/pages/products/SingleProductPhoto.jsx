import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleProductPhoto = ({ imgUrl }) => {
    return (
        <div className="carouselSinglePage">
            <Carousel
                autoPlay
                dynamicHeight
                emulateTouch
                infiniteLoop
                showThumbs={false}
            >
                <div className="carouselSinglePageDiv">
                    <img
                        style={{ maxHeight: "640px", maxWidth: "340px" }}
                        src={imgUrl}
                        alt={1}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default SingleProductPhoto;
