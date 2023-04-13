import { createBrowserRouter } from 'react-router-dom'
import { redirect } from 'react-router-dom'

import App from '../App'
import Doctors from '../pages/Doctors/Doctors'

function checkToken() {
  if (!localStorage.getItem('token')) {
    return redirect('/')
  }
  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/doctors',
    element: <Doctors />,
    loader: checkToken
  }
])

export default router
