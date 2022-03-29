import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

const Homepagecarusel = () => {
    return (
        <Carousel width="100%" className='main-slide' autoPlay dynamicHeight emulateTouch infiniteLoop showThumbs={false}>
            <div>
                <img Height='600px' src={image1} alt={image1} />
            </div>
            <div>
                <img Height='600px' src={image2} alt={image2}/>
            </div>
            <div>
                <img Height='600px' src={image3} alt={image3}/>
            </div>
        </Carousel>
    );
}

export default Homepagecarusel;
