import React from 'react';
import { Button } from '@mui/material';

const SingleProductDescription = ({ productName, productPrice }) => {
    return (
        <div className='singleProductDescription'>
            <form action="">
                <h1 className='singleProductTitle'>
                    {productName}
                </h1>
                <p className='singleProductSubtitle'>
                    Made in Armenia
                </p>
                <span className='product_avelability'>
                   Quantity
                </span>
                <div className="productPrice-wrapper">
                    <span className="price__text">{productPrice}<span className='amd_container'>դր.</span></span>
                    <div className="product__price-note"></div>
                </div>
                <Button style={{ marginBottom: "20px", paddingLeft: "50px", paddingRight: "50px" }} size='large' variant='contained'>ADD</Button>
                <div className="info__tab">
                    <div className='info__tab-container'>
                        <span className="info__tab-label">Մանրամասներ</span>
                    </div>
                </div>
                <div className="info__tabs-body">
                    <div className="info__detail-list">
                        <div className="info__detail-item">
                            <div className="info__detail-item-title">prop</div>
                            <div className="info__detail-item-space"></div>
                            <div className="info__detail-item-value">prop</div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default SingleProductDescription;
