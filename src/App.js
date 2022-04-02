import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageContentAndFooter from "./pages/HomePageContentAndFooter";
import ProductListPage from "./pages/productListPage";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePageContentAndFooter />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:product" element={<SingleProduct />} />
        </Routes>
      <Footer />
    </>
  );
}
export default App;
