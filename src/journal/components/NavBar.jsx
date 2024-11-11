import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({ drawerWidth}) => {

    return (

        <AppBar
            position="fixed"
            sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: 'black',
                boxShadow: 'none',
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                height: '65px',
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none'}}}
                >
                        <MenuOutlined />
                    {/* <MenuIcon /> */}
                </IconButton>

                <Grid container direction='row' justifyContent='space-between'>
                    <Typography variant='h6' noWrap component={'div'}>
                        JournalApp
                    </Typography>
                    <IconButton>
                        <LogoutOutlined color='error' />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
