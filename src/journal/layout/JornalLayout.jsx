import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {

    return (
        <Box sx={{ display: 'flex' }}>
            {/**Navbar */}
            <NavBar drawerWidth={drawerWidth} />

            {/**Sidebar */}
            <SideBar drawerWidth={drawerWidth} />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, ml: '5%' }}>
                {/**Content */}
                {children}
            </Box>
        </Box>
    )

}
