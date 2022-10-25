import axios from 'axios'

import { parseCookies } from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['flexFit:access_token']}`,
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    let errorMessage = error?.response?.data?.message ?? error?.message

    if (error?.message === 'Network Error') {
      errorMessage =
        'Estamos enfrentando problemas. Tente novamente mais tarde.'
    }

    return Promise.reject(errorMessage)
  },
)
