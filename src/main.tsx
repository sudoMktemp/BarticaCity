import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'
import barticaLogo from 'figma:asset/0c4c68ec5082efc5c59da26f2738460120efff61.png'

// Set favicon dynamically
const setFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = barticaLogo;
  document.getElementsByTagName('head')[0].appendChild(link);
  
  // Also set apple-touch-icon
  const appleTouchIcon = document.querySelector("link[rel*='apple-touch-icon']") || document.createElement('link');
  appleTouchIcon.rel = 'apple-touch-icon';
  appleTouchIcon.href = barticaLogo;
  document.getElementsByTagName('head')[0].appendChild(appleTouchIcon);
}

setFavicon();

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH || '/'}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
}
