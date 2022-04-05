import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePageContentAndFooter from "./pages/HomePageContentAndFooter";
import ProductListPage from "./pages/productListPage";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/users/usersSlice";
import { getProducts } from "./features/products/productsSlice";
import { auth, onAuthStateChanged, db, collection, getDocs } from "./firebase";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import CartPage from "./pages/cartPage/CartPage";
import WishlistPage from "./pages/wishlistPage/WishlistPage";
import NotFound from "./pages/NotFound";
import { getWishlistItems } from "./features/products/productsSlice";
import "./App.css";

function App() {
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
      } else {
        setLoading(false);
        dispatch(getWishlistItems({ userId: 0 }));
        dispatch(logout());
      }
    });
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageContentAndFooter />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:product" element={<SingleProduct />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<WishlistPage />} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;
