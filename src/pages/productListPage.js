import ListItem from '../components/main-product-List/ListItem';
// import FilterByCost from '../components/main-product-List/filterByCost';
import Catalog from '../components/main-product-List/catalog';
import CurrentPageContext from '../components/context';
import { useState } from 'react';
import { useLocation } from 'react-router';


function ProductListPage() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(parseInt(location.search?.split('=')[1] || 1));

  return (
    <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
        <main className='product-list-page'>
          <div>
            {/* <FilterByCost /> */}
            <Catalog setCurrentPage={setCurrentPage}/>
          </div>
          <ListItem />
        </main>
    </CurrentPageContext.Provider>
  );
}

export default ProductListPage;
