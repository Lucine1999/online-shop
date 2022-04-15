import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Button } from '@mui/material';
// import { Link } from "react-router-dom";

export default function CartTotal() {
  const style = {
    width: '100%',
    marginBottom: '20px',
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Card sx={{ width: 500 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cart Totals
            </Typography>
            <CardContent style={{ padding: '0px' }}>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button className="totals-style">
                  <ListItemText primary="Sub Total" />
                  <ListItemText className="align-right" primary="$230" />
                </ListItem>
                <Divider />
                <ListItem button className="totals-style">
                  <ListItemText primary="Total" />
                  <ListItemText className="align-right" primary="$300" />
                </ListItem>
              </List>
              <Button className="checkout-btn" variant="contained" href="/">
                Checkout
              </Button>
            </CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
