import BoxComponent from './BoxComponent';
import PaginationRounded from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectWishlist,
  selectCart,
  selectCheckedCategories,
  removeFromCategories
} from '../../features/products/productsSlice';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { selectUser } from '../../features/users/usersSlice';
import filterProductList from './filterByType';
import CurrentPageContext from '../context';
import { Box, CircularProgress } from '@mui/material';

function ListItem({ categoryId, t }) {
  const location = useLocation();
  let allProduct = useSelector(selectProducts);
  let [products, setProducts] = useState([]);
  const [previousPage, setPreviousPage] = useState(
    parseInt(location.search?.split('=')[1] - 1 || 0)
  );
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

  const checkCategories = useSelector(selectCheckedCategories);

  const productCount = 8;

  const user = useSelector(selectUser);
  const user_id = user ? user.uid : 0;

  const cartItems = useSelector(selectCart);
  const wishlistItems = useSelector(selectWishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    setPreviousPage(currentPage - 1);
  }, [currentPage]);

  useEffect(() => {
    setProducts(allProduct);
    checkCategories?.length
      ? setProducts(filterProductList(allProduct, checkCategories))
      : setProducts(allProduct);
  }, [allProduct, checkCategories]);

  useEffect(() => {
    dispatch(removeFromCategories());
  }, [location.pathname]);

  return (
    <main className="product-list">
      {products?.length ? (
        <>
          <div className="items">
            {products.map((value, idx) => {
              if (idx < currentPage * productCount && idx >= previousPage * productCount) {
                return (
                  <BoxComponent
                    key={value.id}
                    userId={user_id}
                    cartItems={cartItems}
                    wishlistItems={wishlistItems}
                    product={value}
                    t={t}
                  />
                );
              }
            })}
          </div>
          <PaginationRounded
            page={products}
            productCount={productCount}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            categoryId={categoryId}
          />
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            color: 'grey.500',
            margin: 'auto',
            marginTop: '100px',
            marginBottom: '100px'
          }}>
          <CircularProgress
            style={{ width: '70px', height: '70px', margin: 'auto' }}
            color="inherit"
          />
        </Box>
      )}
    </main>
  );
}

export default ListItem;
