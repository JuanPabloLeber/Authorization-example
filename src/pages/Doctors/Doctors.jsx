import { Button, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllDoctors } from '../../services/doctors'

function Doctors() {
  const [doctors, setDoctors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      const responseDoctors = await getAllDoctors()
      setDoctors(responseDoctors)
    }
    getData()
  }, [])

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('dni')
    localStorage.removeItem('name')
    navigate('/')
  }

  return (
    <>
      <Typography variant="p">{JSON.stringify(doctors)}</Typography>
      <Divider />
      <Button onClick={() => logout()}>Logout</Button>
    </>
  )
}

export default Doctors
