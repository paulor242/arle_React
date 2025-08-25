import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaTareas from './components/listaTareas.jsx' 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ListaTareas/>
  </StrictMode>,
)
