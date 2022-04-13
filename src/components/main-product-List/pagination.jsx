import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function PaginationRounded({page, productCount, setCurrentPage, currentPage}) {
  const navigate = useNavigate();
  let pageCount = Math.ceil(page.length / productCount);

  React.useEffect(() => {
    setCurrentPage(1);
    navigate('/products');
  }, [pageCount])
  
  return (
    <Stack spacing={2} sx={{margin:'auto'}}>
      <Pagination
       key={pageCount === 1 ? 1 : currentPage}
       defaultPage={pageCount === 1 ? 1 : currentPage}
       count={pageCount} 
       variant="outlined" 
       shape="rounded"
       onChange={(_, num) => setCurrentPage(num)}
       renderItem={(item) => {
        return (
          <PaginationItem
            component={Link}
            to={`/products${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
          )
       }}  
       />
    </Stack>
  );
}
