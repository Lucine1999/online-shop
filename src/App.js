import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageContentAndFooter from "./pages/HomePageContentAndFooter";
import ProductListPage from "./pages/productListPage";
import Homepagecarusel from "./components/main-page/HomePageCarousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageContentAndFooter />} />
          <Route path="/products" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Homepagecarusel />
    </>
  );
}
export default App;
