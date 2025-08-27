import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import MeuComponent from './components/test.jsx'
// import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* 
    <h1>Fabio I</h1>
    <MeuComponent />
    <Header /> 
    */}
  </StrictMode>
)
