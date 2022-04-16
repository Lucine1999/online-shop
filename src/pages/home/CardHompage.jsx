import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

function CardHomePage(obj, key) {
  const buyButton = {
    backgroundColor: '#1f989e',
    color: 'white',
    fontWeight: '700',
    fontSize: '18px',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px'
  };
  return (
    <Card key={key} sx={{ width: 370, margin: 'auto', marginBottom: '10px' }}>
      <CardMedia
        component="img"
        image={obj.img}
        alt="image does not exist"
        height="200"
        width="100%"
      />
      <CardContent style={{ padding: '8px 8px 0px 8px' }}>
        <Typography gutterBottom variant="h6" component="div">
          {obj.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {obj.body}
        </Typography>
      </CardContent>
      <CardActions>
        <button style={buyButton}>Գնել հիմա</button>
      </CardActions>
      {/* </CardActionArea> */}
    </Card>
  );
}

export default CardHomePage;
