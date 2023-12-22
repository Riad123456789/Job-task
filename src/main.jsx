import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider >
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <Toaster />
    </DndProvider>

  </React.StrictMode>,
)
