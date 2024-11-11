import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { Grid, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth = 240 }) => {

    return (
        <Box
            component={'nav'}
            sx={{ width: { sm: drawerWidth,
                flexShrink: { sm: 0} }, 
                backgroundColor: 'green'}}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component={'div'}>
                        JournalApp
                    </Typography>
                </Toolbar>
                <Divider />

                <List >
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map((text, index) => (
                            <div key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container direction={'column'}>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Hola soy yo'} />
                                    </Grid>
                                </ListItemButton>
                            </div>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )

}
