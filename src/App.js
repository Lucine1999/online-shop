import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePageContentAndFooter from "./pages/HomePageContentAndFooter";
import ProductListPage from './pages/productListPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContentAndFooter />} />
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
