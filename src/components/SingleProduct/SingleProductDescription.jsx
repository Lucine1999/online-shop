import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { addToCart } from '../../features/products/productsSlice';


const SingleProductDescription = ({ productName, productPrice, productsID, userID, cartItems }) => {
    const dispatch = useDispatch();

    return (
        <div className='singleProductDescription'>
            <form action="">
                <h1 className='singleProductTitle'>
                {productName}
                </h1>
                <p className='singleProductSubtitle'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit vel laudantium fugit soluta assumenda blanditiis eum nostrum debitis, id est placeat quam numquam accusamus aspernatur neque autem labore natus!
                </p>
                <span className='product_avelability'>
                    product.quantity
                </span>
                <div className="productPrice-wrapper">
                    <span className="price__text">{productPrice}<span className='amd_container'>դր.</span></span>
                    <div className="product__price-note"></div>
                </div>
                <Button
                        style={{marginBottom: "20px", marginRight: "20px", paddingLeft: "25px", paddingRight: "25px"}} 
                        size='large' 
                        variant='contained'                 
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    productId: productsID,
                                    userId: userID,
                                    amount: 1
                            })
                            )
                        }
                    >
                    +
                </Button>
                        {cartItems[productsID] ? 
                            <>
                                <span style={{fontSize: 35}}>
                                    {cartItems && cartItems[productsID]}
                                </span>
                                <Button 
                                    style={{marginBottom: "20px", marginLeft: "20px", paddingLeft: "25px", paddingRight: "25px"}} 
                                    size='large' 
                                    variant='contained'                 
                                    onClick={() =>
                                        dispatch(addToCart({
                                            productId: productsID,
                                            userId: userID,
                                            amount: -1
                                        })
                                    )}
                                >
                                    -
                                </Button>
                            </> 
                        :null} 


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
