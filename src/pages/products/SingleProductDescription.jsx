import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/products/productsSlice";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

const SingleProductDescription = ({
  productName,
  productPrice,
  productsID,
  userID,
  cartItems,
  t,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="singleProductDescription">
      <form action="">
        <h1 className="singleProductTitle">{productName}</h1>
        <p className="singleProductSubtitle">{t("description.aboutProduct")}</p>
        <span className="product_avelability">{t("description.prQty")}</span>
        <div className="productPrice-wrapper">
          <span className="price__text">
            {productPrice}
            <span className="amd_container">{t("description.amd")}</span>
          </span>
          <div className="product__price-note"></div>
        </div>
        {cartItems[productsID] ? (
          <>
            <Paper
              // component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 140,
              }}
            >
              <IconButton
                sx={{ p: "5px" }}
                onClick={() =>
                  dispatch(
                    addToCart({
                      productId: productsID,
                      userId: userID,
                      amount: -1,
                    })
                  )
                }
              >
                <RemoveIcon style={{ width: "20px" }} />
              </IconButton>
              <InputBase
                className="qty-input"
                value={cartItems && cartItems[productsID]}
                sx={{
                  flex: 1,
                  pr: "10px",
                  pl: "10px",
                  pb: "5px",
                  pt: "5px",
                }}
              />
              <IconButton
                sx={{ p: "5px" }}
                onClick={() =>
                  dispatch(
                    addToCart({
                      productId: productsID,
                      userId: userID,
                      amount: 1,
                    })
                  )
                }
              >
                <AddIcon style={{ width: "20px" }} />
              </IconButton>
            </Paper>
          </>
        ) : (
          <Button
            style={{
              backgroundColor: "#1f989e",
              color: "white",
            }}
            variant="contained"
            onClick={() =>
              dispatch(
                addToCart({
                  productId: productsID,
                  userId: userID,
                })
              )
            }
          >
            {t("description.addToCart")}
          </Button>
        )}

        <div className="info__tab">
          <div className="info__tab-container">
            <span className="info__tab-label">{t("description.descr")}</span>
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
};

export default SingleProductDescription;
