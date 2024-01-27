import Home from '~/pages/Home'
import Layout from '../components/Layout'
import { createBrowserRouter } from 'react-router-dom'
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