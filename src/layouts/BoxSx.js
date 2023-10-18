import * as React from 'react';
import { Box, Typography } from '@mui/material';


export default function BoxSx() {
    return (
        <Box sx={{
            mt: 40,
            ml: 'auto',
            mr: 'auto',
            width: '500px',
            bgcolor: 'yellow',
            p: '40px',
            borderRadius: 0,
            transition: 'boder-radius 2s mease-in-out,transform 2s ease-in-out',


            '&:hover': {
                bgcolor: 'red',
                cursor: 'pointer',
                borderRadius: 100,
                // transition:'boder-radius 2s mease-in-out,transform 2s ease-in-out',
                transform: 'rotate(90deg)',
            },
        }}
        >
            <Typography variant='h2'>Hi There</Typography>
        </Box>
    );
}