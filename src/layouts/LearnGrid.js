import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function LearnGrid() {
  return (
    <div>
      <Grid
        container
        sx={{ bgcolor: 'teal',height:'400px' }}
        spacing={3}
        justifyContent='space-around'
        alignItems={'center'}
        // alignContent={'center'}

        >
        <Grid item xs={6} sm={4}>
          <Box sx={{ 
            bgcolor: 'lightgrey',
            pt:3,
            pb:2,
            '&:hover':{bgcolor:'white'},
             }}>
            <Typography>Item 01</Typography>

          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box sx={{ bgcolor: 'lightgrey',p:4, 
           '&:hover':{bgcolor:'red'},}}>
            <Typography>Item 02</Typography>

          </Box>
        </Grid>
        <Grid item >
          <Box sx={{ bgcolor: 'lightgrey',pt:4,pb:8,pl:4,pr:4,

           '&:hover':{bgcolor:'yellow'}, }}>
            <Typography>Item 03</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey',p:4 ,
           '&:hover':{bgcolor:'orange'},}}>
            <Typography>Item 04</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey',p:4 ,
           '&:hover':{bgcolor:'black'},}}>
            <Typography>Item 05</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey',p:4 ,
           '&:hover':{bgcolor:'blue'},}}>
            <Typography>Item 06</Typography>

          </Box>
        </Grid>

      </Grid>
    </div>
  )
}
