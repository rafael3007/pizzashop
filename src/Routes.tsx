import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import Dashboard from './pages/app/Dashboard/dashboard'
import { DashboardPage } from './pages/app/Dashboard-test'
import { Orders } from './pages/app/orders/orders'
import Signin from './pages/auth/sign-in'
import Signup from './pages/auth/sign-up'
import { Error } from './pages/error/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/dashboard-test',
        element: <DashboardPage />,
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
  {
    path: '*',
    element: <NotFound />,
  },
])
