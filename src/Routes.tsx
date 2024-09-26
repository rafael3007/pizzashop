import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import Dashboard from './pages/app/Dashboard/dashboard'
import Orders from './pages/app/orders/orders'
import Signin from './pages/auth/sign-in'
import Signup from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <Signin />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
    ],
  },
])
