import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://tickethub-prodapi.onrender.com',
})
