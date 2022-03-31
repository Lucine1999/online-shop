import "./App.css";
import HomePageContentAndFooter from "./pages/HomePageContentAndFooter";
import ProductListPage from './pages/productListPage';

function App() {
  return (
    <div className="App">
        <ProductListPage/>
         {/* <HomePageHeader /> */}
        <HomePageContentAndFooter />
    </div>
  )
}

export default App;
