import ListItem from '../components/main-product-List/ListItem';
import FilterByCost from '../components/main-product-List/filterByCost';
import Catalog from '../components/main-product-List/catalog';


function ProductListPage() {
  return (
    <>
      <main className='product-list-page'>
        <div>
          <FilterByCost />
          <Catalog />
        </div>
        <ListItem />
      </main>
    </>
  );
}

export default ProductListPage;
