import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function LearnGrid() {
  return (
    <div>
      <Grid container sx={{bgcolor:'teal'}} spacing={3}>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey' }}>
            <Typography>Item 01</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey' }}>
            <Typography>Item 02</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey' }}>
            <Typography>Item 03</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey' }}>
            <Typography>Item 04</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey' }}>
            <Typography>Item 05</Typography>

          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ bgcolor: 'lightgrey' }}>
            <Typography>Item 06</Typography>

          </Box>
        </Grid>

      </Grid>
    </div>
  )
}
