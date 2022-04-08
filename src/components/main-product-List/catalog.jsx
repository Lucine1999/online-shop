import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { addTocategories } from "../../features/products/productsSlice";
import { useDispatch } from 'react-redux';


function Catalog() {
  const dispatch = useDispatch();

  return (
    <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>
      {<ListSubheader>Տեսակ</ListSubheader>}
      {['Հագուստ-ghZIRUGI1PStE2tPsbn6', 'Կոշիկներ-PgwYYE1GyhJQ2VOCajX8', 'Զամբյուղներ-iopRXmVP1wKHzQDQW2G1', 'Խաղալիքներ-wSsbhhPrxgEGFfRXEO1r'].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (

          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined}
              onClick={() =>
                dispatch(
                  addTocategories({
                    categoriId: `${value.split('-')[1]}`,
                  })
                )
              } dense>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
              <ListItemText id={labelId} primary={`${value.split('-')[0]}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Catalog;