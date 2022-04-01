import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite'; 


function CardHomePage(obj) {
  return (
    <Card key={obj.key} sx={{ maxWidth: 300, margin: 'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={obj.img}
          alt="image does not exist"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {obj.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {obj.body}
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


export default CardHomePage;