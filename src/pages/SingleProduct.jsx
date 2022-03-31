import React from 'react';
import SingleProductPhoto from '../components/SingleProduct/SingleProductPhoto';
import SingleProductDescription from '../components/SingleProduct/SingleProductDescription';

import './SingleProduct.css';



const SingleProduct = () => {
    return (
        <div className='singleProductPage'>
            <div className='Container'>
                <div className='card__content-wrapper'>
                    <SingleProductPhoto />
                    <SingleProductDescription />
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
