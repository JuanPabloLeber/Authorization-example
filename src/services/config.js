import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dentem-database.onrender.com/api'
})

export default api
