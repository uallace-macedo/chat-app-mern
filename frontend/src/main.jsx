import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
        <Toaster />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
