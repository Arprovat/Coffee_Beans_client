import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx'
import UpdateCoffe from './Components/UpdateCoffee/UpdateCoffe.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    loader: ()=> fetch('http://localhost:5000/coffees')
  },
  {
    path:'/add_coffee',
    element:<AddCoffee></AddCoffee>
  }
  ,{
    path:'/coffees/:id',
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
