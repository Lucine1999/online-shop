import ListItem from './ListItem';
// import FilterByCost from '../components/main-product-List/filterByCost';
import Catalog from './Catalog';


function ProductListPage({t}) {
  return (
    <>
      <main className='product-list-page'>
        <div style={{width:"220px"}}>
          {/* <FilterByCost /> */}
          <Catalog t={t}/>
        </div>
        <ListItem t={t}/>
      </main>
    </>
  );
}

export default ProductListPage;
