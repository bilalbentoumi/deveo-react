import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/index.css'
import App from './App'

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter basename={ isDev ? '/' : '/deveo-react/' }>
        <App />
    </BrowserRouter>
)