import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './contexts/ThemeProvider.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </HelmetProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
