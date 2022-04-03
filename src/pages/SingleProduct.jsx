import React from "react";
import SingleProductPhoto from "../components/SingleProduct/SingleProductPhoto";
import SingleProductDescription from "../components/SingleProduct/SingleProductDescription";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/products/productsSlice";
import "./SingleProduct.css";

const SingleProduct = () => {
  let { product } = useParams();
  const products = useSelector(selectProducts);

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
              <SingleProductDescription productName={currentProduct[0].name} productPrice={currentProduct[0].price}/>
            </>
          ) : <div>Loading..</div>}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
