import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        wishlistItems: [],
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
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
                wishlistProducts = JSON.parse(
                    localStorage.getItem("wishlistProducts")
                );

                if (userId in wishlistProducts) {
                    if (wishlistProducts[userId].includes(productId)) {
                        const productIndex =
                            wishlistProducts[userId].indexOf(productId);
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

export const { getProducts, addToWishlist, getWishlistItems } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectWishlist = (state) => state.products.wishlistItems;

export default productsSlice.reducer;
