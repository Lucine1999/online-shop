import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import { addTocategories } from "../../features/products/productsSlice";
import { useDispatch } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


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
            disablePadding>
            <FormGroup>
              <FormControlLabel control={<Checkbox onClick={() =>
                dispatch(
                  addTocategories({
                    categoriId: `${value.split('-')[1]}`,
                  })
                )
              } />} label={`${value.split('-')[0]}`} />
            </FormGroup>
          </ListItem>
        );
      })}
    </List >
  );
}

export default Catalog;