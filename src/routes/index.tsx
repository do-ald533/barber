import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/Layout'
import Erro404 from '~/pages/Error404'
import Home from '~/pages/Home'
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Erro404 />,
  },
])
