import React from 'react';
import { Button } from '@mui/material';

const SingleProductDescription = () => {
    return (
        <div className='singleProductDescription'>
            <form action="">
                <h1 className='singleProductTitle'>
                    product.name
                </h1>
                <p className='singleProductSubtitle'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit vel laudantium fugit soluta assumenda blanditiis eum nostrum debitis, id est placeat quam numquam accusamus aspernatur neque autem labore natus!
                </p>
                <span className='product_avelability'>
                    product.quantity
                </span>
                <div class="productPrice-wrapper">
                    <span class="price__text">product.price <span className='amd_container'>դր.</span></span>
                    <div class="product__price-note">price for 1 դր.</div>
                </div>
                <Button style={{marginBottom: "20px", paddingLeft: "50px", paddingRight: "50px"}} size='large' variant='contained'>ADD</Button>
                <div class="info__tab">
                    <div className='info__tab-container'>
                        <span class="info__tab-label">Մանրամասներ</span>
                    </div>
                </div>
                <div class="info__tabs-body">
                    <div class="info__detail-list">
                        <div class="info__detail-item">
                            <div class="info__detail-item-title">prop</div>
                            <div class="info__detail-item-space"></div>
                            <div class="info__detail-item-value">prop</div>
                        </div>
                        </div>
                </div>
            </form>

        </div>
    );
}

export default SingleProductDescription;
