import api from './config'

export async function getAllDoctors() {
  const response = await api.get('/doctors', {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}
