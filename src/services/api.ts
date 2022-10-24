import axios from 'axios'

import Cookies from 'js-cookie'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use((config) => {
  if (config.headers) {
    const token = Cookies.get('access_token')

    config.headers.Authorization = `Bearer ${token}`

    return config
  }
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
