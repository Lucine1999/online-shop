import React, { useEffect, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import HomePageContentAndFooter from "./pages/home/HomeLayout";
import ProductListPage from "./pages/products/ProductListPage";
import SingleProduct from "./pages/products/SingleProduct";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import CartPage from "./pages/cart/CartPage";
import WishlistPage from "./pages/wishlist/WishlistPage";
import NotFound from "./pages/notFound/NotFound";

import { useDispatch } from "react-redux";
import { login, logout } from "./features/users/usersSlice";
import { getProducts } from "./features/products/productsSlice";
import { auth, onAuthStateChanged, db, collection, getDocs } from "./firebase";
import { getWishlistItems, getCartItems } from "./features/products/productsSlice";

import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useDispatch();

  const productsCollectionRef = collection(db, "products");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(productsCollectionRef)
      .then((products) => {
        dispatch(
          getProducts(
            products.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });

    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setLoading(false);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
        dispatch(getWishlistItems({ userId: userAuth.uid }));
        dispatch(getCartItems({ userId: userAuth.uid }));
      } else {
        setLoading(false);
        dispatch(getWishlistItems({ userId: 0 }));
        dispatch(getCartItems({ userId: 0 }));
        dispatch(logout());
      }
    });
  }, [dispatch, productsCollectionRef]);

  if (loading) {
    return <div></div>;
  }  

  return (
    <>
      <Navbar changeLanguage={changeLanguage} t={t}/>
  
      <Routes>
        <Route path="/" element={<HomePageContentAndFooter  t={t}/>} />
        <Route path="/products" element={<ProductListPage t={t}/>} />
        <Route path="/products/:product" element={<SingleProduct t={t}/>} />
        <Route path={"/login"} element={<LogIn t={t}/>} />
        <Route path="/signup" element={<SignUp t={t}/>} />
        <Route path="/cart" element={<CartPage t={t}/>} />
        <Route path="/favorites" element={<WishlistPage t={t}/>} />
        <Route path="*" element={<NotFound t={t}/>} />
      </Routes>
      <Footer t={t} />
    </>
  );
}
export default App;
