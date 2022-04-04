import BoxComponent from "../main-product-List/BoxComponent";
import PaginationRounded from "../main-product-List/pagination";
import {useSelector} from "react-redux";
import { selectProducts } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'


function ListItem() {
    const location = useLocation();
    const products = useSelector(selectProducts);
    const [previusPage, setPreviusPage] = useState(parseInt(location.search?.split('=')[1] - 1 || 0));
    const [currentPage, setCurrentPage] = useState(parseInt(location.search?.split('=')[1] || 1));

    const productCount = 1;

    useEffect(() => {
        setPreviusPage(currentPage -1)
      }, [currentPage])


    return (
        <main className="product-list">
            
            <div className="items">
                {products ? products.map((value, idx) => {
                    if (idx < currentPage * productCount && idx >= previusPage * productCount) {
                        return BoxComponent(value);
                    }
                }) : null}
            </div>
            <PaginationRounded page={products} productCount={productCount} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </main>
    );
}

export default ListItem;
