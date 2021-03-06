import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import {
  selectProducts,
  addToWishlist,
  selectCart,
  addToCart,
  selectWishlist
} from '../../features/products/productsSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

export default function WishlistProducts({ t }) {
  const user = useSelector(selectUser);
  const user_id = user ? user.uid : 0;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const wishlistItems = useSelector(selectWishlist);
  const cartItems = useSelector(selectCart);

  var filteredProducts = products.filter((elem) => {
    return wishlistItems.includes(elem.id);
  });

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '16px'
  };
  const cartImagesStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'contain'
  };

  return (
    <>
      {products?.length ? (
        <>
          {filteredProducts.length > 0 ? (
            <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={titleStyle} align="center">
                      {t('description.image')}
                    </TableCell>
                    <TableCell style={titleStyle} align="center">
                      {t('description.product1')}
                    </TableCell>
                    <TableCell style={titleStyle} align="center">
                      {t('description.price')}
                    </TableCell>
                    <TableCell style={titleStyle} align="center">
                      {t('description.qty')}
                    </TableCell>
                    <TableCell style={titleStyle} align="center">
                      {t('description.remove')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProducts.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0
                        }
                      }}>
                      <TableCell component="th" scope="row" align="center">
                        <img style={cartImagesStyle} src={row.img} alt="cart-img" />
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">
                        {row.price}
                        {t('description.amd')}
                      </TableCell>
                      <TableCell align="center">
                        {row.id in cartItems ? (
                          <>
                            <Paper
                              component="form"
                              sx={{
                                p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 120,
                                margin: 'auto'
                              }}>
                              <IconButton
                                sx={{
                                  p: '5px'
                                }}
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      productId: `${row.id}`,
                                      userId: `${user_id}`,
                                      amount: -1
                                    })
                                  )
                                }>
                                <RemoveIcon
                                  style={{
                                    width: '20px'
                                  }}
                                />
                              </IconButton>
                              <InputBase
                                className="qty-input"
                                value={cartItems && cartItems[row.id]}
                                sx={{
                                  flex: 1,
                                  pr: '10px',
                                  pl: '10px',
                                  pb: '5px',
                                  pt: '5px'
                                }}
                              />
                              <IconButton
                                sx={{
                                  p: '5px'
                                }}
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      productId: `${row.id}`,
                                      userId: `${user_id}`,
                                      amount: 1
                                    })
                                  )
                                }>
                                <AddIcon
                                  style={{
                                    width: '20px'
                                  }}
                                />
                              </IconButton>
                            </Paper>
                          </>
                        ) : (
                          <Button
                            style={{
                              backgroundColor: '#1f989e',
                              color: 'white'
                            }}
                            variant="contained"
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  productId: `${row.id}`,
                                  userId: `${user_id}`
                                })
                              )
                            }>
                            {t('description.addToCart')}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <DeleteIcon
                          style={{
                            color: '#a2959c',
                            cursor: 'pointer'
                          }}
                          onClick={() =>
                            dispatch(
                              addToWishlist({
                                productId: `${row.id}`,
                                userId: `${user_id}`,
                                amount: -1
                              })
                            )
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Paper
              style={{
                padding: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none'
              }}>
              <Typography
                style={{ margin: '0', padding: '20px' }}
                align="center"
                variant="h4"
                gutterBottom>
                {t('description.emptyWishlist')}
              </Typography>
              <Button
                style={{
                  width: '130px',
                  backgroundColor: '#1f989e',
                  color: 'white'
                }}
                component={Link}
                to="/products"
                variant="contained">
                {t('description.goToShop')}
              </Button>
            </Paper>
          )}
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            marginBottom: '7%',
            color: 'grey.500'
          }}>
          <CircularProgress
            style={{ width: '70px', height: '70px', margin: 'auto' }}
            color="inherit"
          />
        </Box>
      )}
    </>
  );
}
