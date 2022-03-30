import ListItem from '../components/ListItem';
import FilterByCost from '../components/filterByCost';
import Catalog from '../components/catalog';


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
