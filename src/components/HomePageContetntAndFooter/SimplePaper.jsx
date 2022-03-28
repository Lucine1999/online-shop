import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
    sx={{
      display: 'flex',
      '& > :not(style)': {
        m: 1,
        width: 350,
        height: 220,
      },
      justifyContent: 'space-around'
    }}
  >
    <Paper variant="outlined" square />
    <Paper variant="outlined" square />
    <Paper variant="outlined" square />
  </Box>
  );
}
