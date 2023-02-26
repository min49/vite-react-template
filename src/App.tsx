import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from 'routes/Home'
import Profile from 'routes/Profile'
import Root from 'routes/Root'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
