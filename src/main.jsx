import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Store from './store/store.js'
import {Provider} from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
