import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { JournalApp } from './JournalApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>
)
