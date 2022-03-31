import ListItem from '../components/main/ListItem';
import FilterByCost from '../components/main/filterByCost';
import Catalog from '../components/main/catalog';


function ProductListPage() {
  return (
    <main className='product-list-page'>
      <div><FilterByCost />
        <Catalog /></div>
      <ListItem />
    </main>
  );
}

export default ProductListPage;
