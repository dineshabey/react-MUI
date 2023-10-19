import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function NestedGrid() {
    return (
        <div>
            <Grid container>
                <Grid item xs={5} sm={4} md={2} sx={{ bgcolor: 'red' }}>
                    <Typography>

                    </Typography>
                </Grid>
                <Grid item xs={7} sm={8} md={10} sx={{ bgcolor: 'yellow' }}>
                    Colum 2
                </Grid>
                <Grid item>
                    Colum 3
                </Grid>

            </Grid>
        </div>
    )
}

