import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router';
import { selectCategories } from '../../features/products/productsSlice';
import { useSelector } from 'react-redux';

function Catalog({ categoryId, setCurrentPage, t }) {
  const navigate = useNavigate();
  const selectedCategories = categoryId ? categoryId.split('_') : [];
  const allCategories = useSelector(selectCategories);
  console.log('allCategories', allCategories);
  return (
    <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>
      {<ListSubheader>{t('description.type')}</ListSubheader>}
      {allCategories.map((value) => {
        return (
          <ListItem key={value.id} disablePadding>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategories.includes(value.id)}
                    onChange={() => {
                      let currentIndex = selectedCategories.indexOf(value.id);

                      if (currentIndex === -1) {
                        selectedCategories.push(value.id);
                      } else {
                        selectedCategories.splice(currentIndex, 1);
                      }
                      navigate(
                        selectedCategories?.length
                          ? '/products/category/' + selectedCategories.join('_')
                          : '/products'
                      );
                      setCurrentPage(1);
                    }}
                  />
                }
                label={t(`description.${value.translate_key}`)}
              />
            </FormGroup>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Catalog;
