import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route,createBrowserRouter,createRoutesFromElements,BrowserRouter,Routes,RouterProvider} from 'react-router-dom'
import csec1 from './Component 1/csec1.jsx'
import csec2 from './Component 2/csec2.jsx'
import csec3 from './Component 3/csec3.jsx'
import csec4 from './Component 4/csec4.jsx'
import Navbar from './Navbar.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='/api1' element={<csec1 />} />
      <Route path='/api2' element={<csec2 />} />
      <Route path='/api3' element={<csec3 />} />
      <Route path='/api4' element={<csec4 />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
