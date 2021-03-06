import ListItem from './ListItem';
import Catalog from './Catalog';
import CurrentPageContext from '../context';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCategories } from '../../features/products/productsSlice';

function ProductListPage({ t }) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(parseInt(location.search?.split('=')[1] || 1));

  const dispatch = useDispatch();

  const categoryId = useParams().categoryId;

  useEffect(() => {
    if (categoryId) {
      const categoriesArr = categoryId.split('_');
      categoriesArr.forEach((category) => {
        dispatch(addToCategories({ categoryId: category }));
      });
    }
  }, [categoryId]);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <main className="product-list-page">
        <div>
          <Catalog categoryId={categoryId} setCurrentPage={setCurrentPage} t={t} />
        </div>
        <ListItem categoryId={categoryId} t={t} />
      </main>
    </CurrentPageContext.Provider>
  );
}

export default ProductListPage;
