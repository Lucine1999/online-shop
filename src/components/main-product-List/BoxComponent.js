import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';
// import FavoriteIcon from '@mui/icons-material/Favorite'; 

function BoxComponent(obj) {
  return (
    <Card key={obj.id} sx={{ maxWidth: 300, margin: 'auto', marginBottom: 3 }} component={Link} to={`/products/${obj.id}`}>
      <CardActionArea>
        <CardMedia
          height="200"
          component="img"
          image={obj.img}
          alt="image does not exist"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {obj.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {obj.price + " " + obj.currency}
          </Typography>
          <Typography>
            <FavoriteBorderIcon />
            {/* <FavoriteIcon /> */}
            <AddShoppingCartIcon />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default BoxComponent;