import React, { useState } from 'react'

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

import { signupService } from '../../services/auth'

function Signup() {
  const [name, setName] = useState('')
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function onSignup() {
    const data = {
      name: name,
      dni: dni,
      password: password
    }
    try {
      const responseData = await signupService(data)
      localStorage.setItem('token', responseData.token)
      localStorage.setItem('dni', responseData.dni)
      localStorage.setItem('name', responseData.name)

      navigate('/doctors')
    } catch (error) {}
  }

  return (
    <Card sx={{ maxWidth: '500px', margin: '20px auto' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
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
          type="password"
          variant="outlined"
          fullWidth={true}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="success" onClick={() => onSignup()}>
          Sign Up
        </Button>
      </CardActions>
    </Card>
  )
}

export default Signup
