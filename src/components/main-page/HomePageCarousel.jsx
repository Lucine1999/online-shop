import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const images = [image1, image2, image3]

const Homepagecarusel = () => {
    return (
        <Carousel width="100%" className='main-slide' autoPlay dynamicHeight emulateTouch infiniteLoop showThumbs={false}>
            {
                images.map(el => {
                    return (
                    <div key={el}>
                        <img style={{maxHeight: '800px'}} src={el} alt={el} />
                    </div>
                )})
            }
        </Carousel>
    );
}

export default Homepagecarusel;
