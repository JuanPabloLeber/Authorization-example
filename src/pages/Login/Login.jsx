import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions
} from '@mui/material'

import { loginService } from '../../services/auth'

function Login() {
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function onLogin() {
    const data = {
      dni: dni,
      password: password
    }
    try {
      const loginResponse = await loginService(data)
      if (loginResponse.error) {
        throw loginResponse.error
      } else {
        localStorage.setItem('token', loginResponse.token)
        localStorage.setItem('dni', loginResponse.dni)
        localStorage.setItem('name', loginResponse.name)
        navigate('/doctors')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Card sx={{ maxWidth: '500px', margin: '20px auto' }}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          onChange={(e) => setDni(e.target.value)}
          label="DNI"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button>Register</Button>
        <Button onClick={() => onLogin()} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default Login
