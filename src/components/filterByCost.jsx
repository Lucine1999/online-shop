import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FilterByCost() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '18ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <label>Գին, դր․</label>
            <br />
            <TextField id="outlined-basic" label=" -ից" variant="outlined" />
            <TextField id="outlined-basic" label="մինչև" variant="outlined" />
        </Box>
    );
}

export default FilterByCost;