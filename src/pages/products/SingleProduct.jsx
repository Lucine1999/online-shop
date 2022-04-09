import React from "react";
import SingleProductPhoto from "./SingleProductPhoto";
import SingleProductDescription from "./SingleProductDescription";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart, selectProducts } from "../../features/products/productsSlice";
import { selectUser } from "../../features/users/usersSlice";
import "./SingleProduct.css";

const SingleProduct = () => {
  let { product } = useParams();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCart);

  const user = useSelector(selectUser);
  const user_id = user ? user.uid : 0;



  const currentProduct = products.filter((item) => {
    return item.id === product;
  });

  return (
    <div className="singleProductPage">
      <div className="Container">
        <div className="card__content-wrapper">
          {currentProduct?.length ? (
            <>
              <SingleProductPhoto
                imgUrl={currentProduct[0].img}
              />
              <SingleProductDescription cartItems={cartItems} productName={currentProduct[0].name} productPrice={currentProduct[0].price} productsID={currentProduct[0].id} userID={user_id}/>
            </>
          ) : <div>Loading..</div>}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
