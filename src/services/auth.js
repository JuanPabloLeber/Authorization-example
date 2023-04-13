import api from './config.js'

export async function signupService(data) {
  console.log('signup in progress')
  const response = await api.post('/auth/signup', data)
  return response.data
}

export async function loginService(data) {
  console.log('login in progress')
  const response = await api.post('/auth/login', data)
  return response.data
}
