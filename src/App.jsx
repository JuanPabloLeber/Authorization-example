import { useState } from 'react'

import './App.css'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import { Button } from '@mui/material'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      {isLogin ? <Login /> : <Signup />}

      <Button onClick={() => setIsLogin((oldIsLogin) => !oldIsLogin)}>
        Change to: {isLogin ? 'Signup' : 'Login'}
      </Button>
    </>
  )
}

export default App
