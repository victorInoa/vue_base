import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_ROOT_URL,
  withCredentials: false,
})
