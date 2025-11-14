import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Layout from './components/layout/Layout'
import LoginPage from './Pages/auth/LoginPage'
import Pricing from './Pages/Pricing'
import Authlayout from './components/layout/Authlayout'
import Registeration from './Pages/auth/Registeration'
import SiginPage from './Pages/auth/SiginPage'
import EmailVerification from './Pages/auth/EmailVerification'
import ForgetPassword from './Pages/auth/ForgetPassword'
import EmailOtp from './Pages/auth/EmailOtp'
import ChangePassword from './Pages/auth/ChangePassword'
import Dashboard from './components/dashboard/Dashboard'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <App/>
      },
     
      {
        path: "Pricing",
        element: <Pricing />
      },

      {
        path:"Dashboard",
        element: <Dashboard/>
      }
    ],
  },

  {
     element: <Authlayout/>,
     children:[
      {
          path:"Registeration",
          element:<Registeration/>
      },
      {
        path: "Login",
        element: <LoginPage />
      },
      {
        path: "Sign-Up",
        element: <SiginPage />
      },
      {
        path: "EmailVerification",
        element: <EmailVerification />
      },
       {
        path: "ForgetPassword",
        element: <ForgetPassword />
      },
       {
        path: "EmailOtp",
        element: <EmailOtp />
      },
      {
        path: "ChangePassword",
        element: <ChangePassword  />
      }
      
      
     ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
