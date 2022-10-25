import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

import router from 'next/router'

import { setCookie } from 'nookies'

interface SignInProps {
  email: string
  password: string
}

interface User {
  name: string
  email: string
}

interface AuthContextType {
  signIn: (data: SignInProps) => Promise<void>
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const isAuthenticated = !!user

  async function signIn(data: SignInProps) {
    try {
      const response = await api.post('/auth/login', data)

      setCookie(undefined, 'flexFit:access_token', response.data.access_token)

      setUser(response.data.user)

      router.push('/home')
    } catch (error: any) {
      throw Error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
