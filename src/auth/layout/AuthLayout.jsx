import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { ChildCare } from '@mui/icons-material';


export const AuthLayout = ({children, title = ''}) => {
    return (


        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
                className='box-shadow'
                xs={8}
                sx={{ width: 450, backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

                <Typography variant='h5' sx={{ mb: 4 }}>{ title }</Typography>

                {/* AQUI VA EL CHILDREN */}
                { children }
                
            </Grid>
        </Grid>
    )
}
