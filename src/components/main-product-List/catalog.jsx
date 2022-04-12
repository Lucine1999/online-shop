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
            onClick={(e) => {
              let checkbox = e.target.parentElement.parentElement.firstChild
              checkbox.classList.toggle('Mui-checked');
              checkbox.lastChild.innerHTML === '<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>' ?
                checkbox.lastChild.innerHTML = '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>' :
                checkbox.lastChild.innerHTML = '<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>';
            }}
          >
            <ListItemButton role={undefined}
              onClick={() =>
                dispatch(
                  addTocategories({
                    categoriId: `${value.split('-')[1]}`,
                  })
                )
              }>
              <Checkbox
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
              <ListItemText id={labelId} primary={`${value.split('-')[0]}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List >
  );
}

export default Catalog;