import ListItem from './ListItem';
// import FilterByCost from '../components/main-product-List/filterByCost';
import Catalog from './Catalog';
import CurrentPageContext from '../context';
import { useState } from 'react';
import { useLocation } from 'react-router';

function ProductListPage({ t }) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(parseInt(location.search?.split('=')[1] || 1));

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <main className="product-list-page">
        <div>
          {/* <FilterByCost /> */}
          <Catalog setCurrentPage={setCurrentPage} t={t} />
        </div>
        <ListItem t={t} />
      </main>
    </CurrentPageContext.Provider>
  );
}

export default ProductListPage;
