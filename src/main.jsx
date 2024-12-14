import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route,createBrowserRouter,createRoutesFromElements,BrowserRouter,Routes,RouterProvider} from 'react-router-dom'
import Csec1 from './Component 1/Csec1.jsx'
import Csec2 from './Component 2/Csec2.jsx'
import Csec3 from './Component 3/Csec3.jsx'
import Csec4 from './Component 4/Csec4.jsx'
import Navbar from './Navbar.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='/api1' element={<Csec1 />} />
      <Route path='/api2' element={<Csec2 />} />
      <Route path='/api3' element={<Csec3 />} />
      <Route path='/api4' element={<Csec4 />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
