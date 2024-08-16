import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Mainapp } from './09-useContext/Mainapp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Mainapp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
