import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function NestedGrid() {
    return (
        <div>
            <Grid container>
                <Grid item>
                    <Typography>
                        Nested Grid
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

