import BoxComponent from "../main-product-List/BoxComponent";
import PaginationRounded from "../main-product-List/pagination";
import {useSelector} from "react-redux";
import { selectProducts, selectWishlist } from "../../features/products/productsSlice";
import { selectUser } from "../../features/users/usersSlice";

function ListItem() {
    const products = useSelector(selectProducts);
    const wishlistItems = useSelector(selectWishlist);
    const user = useSelector(selectUser);
    const user_id = user ? user.uid : 0;

    return (
        <main className="product-list">
            <div className="items">
                {products ? products.map((value) => <BoxComponent wishlistItems={wishlistItems} userId={user_id} product={value} key={value.id} />) : null}
            </div>
            <PaginationRounded />
        </main>
    );
}

export default ListItem;
