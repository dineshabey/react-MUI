import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Directions } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'skyblue',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        directions="column"
        justifyContent="space-between"
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={6} key={index}>
            <Item>
              <Typography sx={{ fontSize: { xs: '20px', sm: '30px', md: '40px', lg: '100px' } }}>
              xs=2 - {index+1}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box >


  );
}