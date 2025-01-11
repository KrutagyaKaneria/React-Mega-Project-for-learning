import './index.css'
import { Route,createBrowserRouter,createRoutesFromElements,BrowserRouter,Routes,RouterProvider} from 'react-router-dom'
import Csec1 from './Component_1/Csec1.jsx'
import Csec2 from './Component_2/Csec2.jsx'
import Csec3 from './Component_3/Csec3.jsx'
import Csec4 from './Component_4/Csec4.jsx'
import Navbar from './Navbar.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Recipe from './Component_1/Recipe.jsx'
import Csec5 from './Component_5/Csec5.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='/api1' element={<Csec1 />}/>
      <Route path='/api1/recipe' element={<Recipe/>}/>
      <Route path='/api2' element={<Csec2 />} />
      <Route path='/api3' element={<Csec3 />} />
      <Route path='/api4' element={<Csec5/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
