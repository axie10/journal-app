import React from 'react'
import { JournalLayout } from '../layout/JornalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {

    return (

        <JournalLayout>

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    'hover': {backgroundColor: 'error.main', opacity: 0.8},
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined
                    sx={{ fontSize: 40 }}
                />

            </IconButton>
            
        </JournalLayout>

    )

}