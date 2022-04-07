import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cartItems: {},
    wishlistItems: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      let cartProducts, cartProducts_str;
      let userId = action.payload.userId;
      let productId = action.payload.productId;
      let amount = action.payload.amount;
      let count = 1;

      let cartCurrentProduct = {
        [userId]: {
          [productId]: count,
        },
      };

      if (localStorage.getItem("cartProducts") === null) {
        cartProducts = cartCurrentProduct;
      } else {
        cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

        if (userId in cartProducts) {
          if (cartProducts[userId].hasOwnProperty(productId)) {
            if (cartProducts[userId][productId] + amount <= 0) {
              delete cartProducts[userId][productId];
              // cartProducts[userId][productId] = 0;
            } else {
              cartProducts[userId][productId] += amount;
            }
          } else {
            cartProducts[userId] = {
              ...cartProducts[userId],
              [productId]: count,
            };
          }
        } else {
          cartProducts[userId] = {
            [productId]: count,
          };
        }
      }

      state.cartItems = cartProducts[userId];
      cartProducts_str = JSON.stringify(cartProducts);
      localStorage.setItem("cartProducts", cartProducts_str);
    },
    removeFromCart: (state, action) => {
      let cartProducts_str;
      let userId = action.payload.userId;
      let productId = action.payload.productId;
      let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

      delete cartProducts[userId][productId];

      state.cartItems = cartProducts[userId];
      cartProducts_str = JSON.stringify(cartProducts);
      localStorage.setItem("cartProducts", cartProducts_str);
    },
    getCartItems: (state, action) => {
      let userId = action.payload.userId;

      if (localStorage.getItem("cartProducts") !== null) {
        let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

        if (userId in cartProducts) {
          state.cartItems = cartProducts[userId];
        } else {
          state.cartItems = [];
        }
      }
    },
    addToWishlist: (state, action) => {
      let wishlistProducts, wishlistProducts_str;
      let userId = action.payload.userId;
      let productId = action.payload.productId;
      let wishlistCurrentProduct = {
        [userId]: [productId],
      };

      if (localStorage.getItem("wishlistProducts") === null) {
        wishlistProducts = wishlistCurrentProduct;
      } else {
        wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));

        if (userId in wishlistProducts) {
          if (wishlistProducts[userId].includes(productId)) {
            const productIndex = wishlistProducts[userId].indexOf(productId);
            if (productIndex > -1) {
              wishlistProducts[userId].splice(productIndex, 1);
            }
          } else {
            wishlistProducts[userId].push(productId);
          }
        } else {
          wishlistProducts[userId] = [productId];
        }
      }

      state.wishlistItems = wishlistProducts[userId];
      wishlistProducts_str = JSON.stringify(wishlistProducts);
      localStorage.setItem("wishlistProducts", wishlistProducts_str);
    },
    getWishlistItems: (state, action) => {
      let userId = action.payload.userId;

      if (localStorage.getItem("wishlistProducts") !== null) {
        let wishlistProducts = JSON.parse(
          localStorage.getItem("wishlistProducts")
        );

        if (userId in wishlistProducts) {
          state.wishlistItems = wishlistProducts[userId];
        } else {
          state.wishlistItems = [];
        }
      }
    },
  },
});

export const {
  getProducts,
  addToCart,
  getCartItems,
  removeFromCart,
  addToWishlist,
  getWishlistItems,
} = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cartItems;
export const selectWishlist = (state) => state.products.wishlistItems;

export default productsSlice.reducer;
