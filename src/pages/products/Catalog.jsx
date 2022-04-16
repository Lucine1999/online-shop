import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { addToCategories } from '../../features/products/productsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Catalog({ setCurrentPage, t }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>
      {<ListSubheader>{t('description.type')}</ListSubheader>}
      {[
        'clothes-ghZIRUGI1PStE2tPsbn6',
        'shoes-PgwYYE1GyhJQ2VOCajX8',
        'baskets-iopRXmVP1wKHzQDQW2G1',
        'toys-wSsbhhPrxgEGFfRXEO1r'
      ].map((value) => {
        //const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {
                      navigate('/products');
                      setCurrentPage(1);
                    }}
                    onClick={() =>
                      dispatch(
                        addToCategories({
                          categoryId: `${value.split('-')[1]}`
                        })
                      )
                    }
                  />
                }
                label={t(`description.${value.split('-')[0]}`)}
              />
            </FormGroup>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Catalog;
