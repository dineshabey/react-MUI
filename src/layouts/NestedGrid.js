import { Grid, Typography } from '@mui/material'
import { orange } from '@mui/material/colors';
import { fontGrid } from '@mui/material/styles/cssUtils';
import React from 'react'

export default function NestedGrid() {
    return (
        <div>
            <Grid container>
                <Grid item xs={5} sm={4} md={2} sx={{ bgcolor: 'red' }}>
                    {Array.from(Array(18)).map((val, key) => {
                        return (<Typography
                            variant='h4'
                            key={key}
                            sx={{ p: 1 }}
                        >Item {key}</Typography>);
                    })}
                </Grid>
                <Grid item xs={7} sm={8} md={10} sx={{ bgcolor: 'yellow' }}>
                    <Grid container sx={{ bgcolor: 'white' }}>
                        <Grid item xs={12}>
                            <Typography >Top navigations Bar</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={8} sx={{bgcolor:'orange'}}>
                            <Typography sx={{fontSize:'40px',bgcolor:'teal'}}>Inner left</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}  sx={{bgcolor:'black'}}>
                            <Typography sx={{fontSize:'40px',bgcolor:'skyblue'}}>Inner right</Typography>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </div>
    )
}

