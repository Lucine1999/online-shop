import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Typography, Button } from '@mui/material';
import { Box, CircularProgress } from '@mui/material';

// import Container from "@material-ui/core/Container";

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/users/usersSlice';
import {
  selectProducts,
  selectCart,
  addToCart,
  removeFromCart
} from '../../features/products/productsSlice';

export default function CartProducts({ t }) {
  const user = useSelector(selectUser);
  const user_id = user ? user.uid : 0;

  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCart);

  let filteredProducts = products.filter(function (e) {
    return this.indexOf(e.id) >= 0;
  }, Object.keys(cartItems));

  const dispatch = useDispatch();

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
          {filteredProducts?.length ? (
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
                      {t('description.total')}
                    </TableCell>
                    <TableCell style={titleStyle} align="center">
                      {t('description.remove')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProducts.map((row) =>
                    cartItems[row.id] ? (
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
                              sx={{ p: '5px' }}
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
                              value={cartItems[row.id]}
                              sx={{
                                flex: 1,
                                pr: '10px',
                                pl: '10px',
                                pb: '5px',
                                pt: '5px'
                              }}
                            />
                            <IconButton
                              sx={{ p: '5px' }}
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
                        </TableCell>
                        <TableCell align="center">
                          {cartItems[row.id] * row.price}
                          {t('description.amd')}
                        </TableCell>
                        <TableCell align="center">
                          <DeleteIcon
                            style={{
                              color: '#a2959c',
                              cursor: 'pointer'
                            }}
                            onClick={() =>
                              dispatch(
                                removeFromCart({
                                  productId: `${row.id}`,
                                  userId: `${user_id}`
                                })
                              )
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ) : (
                      dispatch(
                        removeFromCart({
                          productId: `${row.id}`,
                          userId: `${user_id}`
                        })
                      )
                    )
                  )}
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
                {t('description.empty')}
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
