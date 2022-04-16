import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PaginationRounded({
  page,
  productCount,
  setCurrentPage,
  currentPage,
  categoryId
}) {
  let pageCount = Math.ceil(page.length / productCount);

  return (
    <Stack spacing={2} sx={{ margin: 'auto' }}>
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
              to={
                categoryId
                  ? `/products/category/${categoryId}?page=${item.page}`
                  : `/products?page=${item.page}`
              }
              {...item}
            />
          );
        }}
      />
    </Stack>
  );
}
