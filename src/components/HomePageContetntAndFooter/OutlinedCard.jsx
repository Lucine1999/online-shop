import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
  >
  </Box>
);

const firstCart =
{
  cardHeder: 'Get Offer For Summer',
  img: 'https://template.hasthemes.com/destry/destry/assets/images/banner/banner-1.jpg'
};

const card = (
  < React.Fragment >
  <CardContent>
    <CardMedia
      component="img"
      height="200"
      image={firstCart.img}
      alt="Paella dish"
    />
    <Typography variant="h5">
      {firstCart.cardHeder}
    </Typography>
    <CardActions>
      <Button size="small">Shop Now</Button>
    </CardActions>
  </CardContent>

  </React.Fragment >
);




export default function OutlinedCard() {
  return (
    <div className='cards-container'>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
    </div>
  );
}
