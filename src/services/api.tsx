import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.HEROKU,
})

export default api