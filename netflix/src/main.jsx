import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import   '../node_modules/bootstrap/dist/css/bootstrap.css';
import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
