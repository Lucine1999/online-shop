import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const SingleProductPhoto = () => {
    return (
        <div className='carouselSinglePage'>
            <Carousel autoPlay dynamicHeight emulateTouch infiniteLoop showThumbs={false}>
                <div className='carouselSinglePageDiv'>
                    <img style={{maxHeight: '640px', maxWidth: '340px'}} src={'https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/AK0AAOSwYeBhe~3l/$_58.png'} alt={1} />
                </div>
            </Carousel>
        </div>
    );
}

export default SingleProductPhoto;
