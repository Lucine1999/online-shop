import BoxComponent from "./BoxComponent";
import PaginationRounded from "./Pagination";
import {useSelector} from "react-redux";
import { selectProducts, selectWishlist, selectCart } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { selectUser } from "../../features/users/usersSlice";

function ListItem() {
    const location = useLocation();
    const products = useSelector(selectProducts);
    const [previusPage, setPreviusPage] = useState(parseInt(location.search?.split('=')[1] - 1 || 0));
    const [currentPage, setCurrentPage] = useState(parseInt(location.search?.split('=')[1] || 1));

    const productCount = 8;

    const user = useSelector(selectUser);
    const user_id = user ? user.uid : 0;
    
    const cartItems = useSelector(selectCart);
    const wishlistItems = useSelector(selectWishlist);
    
    
    useEffect(() => {
        setPreviusPage(currentPage -1)
      }, [currentPage])

    return (
        <main className="product-list">
            <div className="items">
                {products ? products.map((value, idx) => {
                    if (idx < currentPage * productCount && idx >= previusPage * productCount) {
                        return <BoxComponent key={value.id} userId={user_id} cartItems={cartItems} wishlistItems={wishlistItems} product ={value}/>
                    }
                }) : null}
            </div>
            <PaginationRounded page={products} productCount={productCount} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </main>
    );
}

export default ListItem;
