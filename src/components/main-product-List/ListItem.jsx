import BoxComponent from "../main-product-List/BoxComponent";
import PaginationRounded from "../main-product-List/pagination";
import { useSelector } from "react-redux";
import { selectProducts, selectWishlist, selectCategories } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { selectUser } from "../../features/users/usersSlice";
import filterProductList from "./filterByType";

function ListItem() {
    const location = useLocation();
    let AllProduct = useSelector(selectProducts);
    let [products,setProducts] = useState(AllProduct);
    const [previusPage, setPreviusPage] = useState(parseInt(location.search?.split('=')[1] - 1 || 0));
    const [currentPage, setCurrentPage] = useState(parseInt(location.search?.split('=')[1] || 1));

    const checkCategories = useSelector(selectCategories);

    const productCount = 8;

    const wishlistItems = useSelector(selectWishlist);
    const user = useSelector(selectUser);
    const user_id = user ? user.uid : 0;


    useEffect(() => {
        setPreviusPage(currentPage - 1)
    }, [currentPage])

    useEffect(() => {
        if (checkCategories.length > 0) {
            setProducts(filterProductList(AllProduct, checkCategories))
        } else {
            setProducts(AllProduct)
        }

    },[checkCategories])

    return (
        <main className="product-list">
            <div className="items">
                {products ? products.map((value, idx) => {
                    if (idx < currentPage * productCount && idx >= previusPage * productCount) {
                        return <BoxComponent wishlistItems={wishlistItems} userId={user_id} product={value} key={value.id} />
                    }
                }) : null}
            </div>
            <PaginationRounded page={products} productCount={productCount} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </main>
    );
}

export default ListItem;
