import * as React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToWishlist, addToCart } from '../../features/products/productsSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { t } from 'i18next';
import './BoxComponent.css';

function BoxComponent(props) {
  let obj = props.product;
  const dispatch = useDispatch();

  return (
    obj.img && (
      <Card
        className="products-each-card-style"
        key={obj.id}
        sx={{
          margin: '5px 5px 20px 5px',
          position: 'relative'
        }}>
        <CardMedia
          className="productPhoto"
          height="200"
          component="img"
          image={obj.img}
          alt="image does not exist"
          style={{
            backgroundColor: '#e5e5e5'
          }}
        />
        <CardContent style={{ textAlign: 'center', paddingBottom: '0px' }}>
          <Typography
            component={Link}
            to={`/products/${obj.id}`}
            style={{ textDecoration: 'none', color: '#202020c2' }}
            variant="h6">
            {obj.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginBottom: '10px' }}>
            {obj.price + ' ' + t('description.amd')}
          </Typography>
          <Typography>
            <IconButton
              component="span"
              onClick={() =>
                dispatch(
                  addToWishlist({
                    productId: `${obj.id}`,
                    userId: `${props.userId}`
                  })
                )
              }
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                padding: '0'
              }}>
              {props.wishlistItems ? (
                props.wishlistItems.includes(`${obj.id}`) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )
              ) : null}
            </IconButton>
          </Typography>
        </CardContent>
        <CardActions style={{ padding: '20px' }}>
          {props.cartItems ? (
            !Object.prototype.hasOwnProperty.call(props.cartItems, `${obj.id}`) ? (
              <Button
                className="add-to-cart-shop-page"
                onClick={() =>
                  dispatch(
                    addToCart({
                      productId: `${obj.id}`,
                      userId: `${props.userId}`
                    })
                  )
                }>
                {props.t('description.addToCart')}
                <ShoppingCartOutlinedIcon style={{ marginLeft: '5px', width: '18px' }} />
              </Button>
            ) : (
              <>
                <Paper
                  style={{
                    width: '100%',
                    height: '45px',
                    border: '2px solid #202020c2',
                    borderRadius: '5px',
                    boxShadow: 'none'
                  }}
                  component="form"
                  sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 140
                  }}>
                  <IconButton
                    sx={{ p: '5px' }}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          productId: `${obj.id}`,
                          userId: `${props.userId}`,
                          amount: -1
                        })
                      )
                    }>
                    <RemoveIcon style={{ width: '20px' }} />
                  </IconButton>
                  <InputBase
                    className="shop-page-quantity-input"
                    value={props.cartItems && props.cartItems[`${obj.id}`]}
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
                          productId: `${obj.id}`,
                          userId: `${props.userId}`,
                          amount: 1
                        })
                      )
                    }>
                    <AddIcon style={{ width: '20px' }} />
                  </IconButton>
                </Paper>
              </>
            )
          ) : null}
        </CardActions>
      </Card>
    )
  );
}

export default BoxComponent;
