import BoxComponent from "../main-product-List/BoxComponent";
import PaginationRounded from "../main-product-List/pagination";
import {useSelector} from "react-redux";
import { selectProducts } from "../../features/products/productsSlice";

function ListItem() {
    const products = useSelector(selectProducts);
    return (
        <main className="product-list">
            
            <div className="items">
                {products ? products.map((value) => BoxComponent(value)) : null}
            </div>
            <PaginationRounded />
        </main>
    );
}

export default ListItem;
