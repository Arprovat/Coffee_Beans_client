import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx'
import UpdateCoffe from './Components/UpdateCoffee/UpdateCoffe.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Login from './Components/Login/Login.JSX'
import AuthCenter from './Components/Auth/AuthCenter.jsx'

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
  ,{
    path:'/login',
    element:<Login></Login>
  },{
    path:'/signup',
    element:<SignUp/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthCenter>
    
   <RouterProvider router={router}></RouterProvider>
    </AuthCenter> 
  </StrictMode>,
)
