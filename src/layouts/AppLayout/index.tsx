import { ReactNode } from 'react'
import { AppLayoutContainer, Header, Content } from './styles'

import Logo from '../../assets/logo.svg'
import Image from 'next/future/image'
import { Navbar } from './components/Navbar'
import { useQuery } from 'react-query'
import { api } from '../../services/api'

interface Props {
  children: ReactNode
}

interface UserProps {
  name: string
  email: string
}

export function AppLayout({ children }: Props) {
  const { data: me } = useQuery<UserProps>('@me/header', fetchMe)

  async function fetchMe() {
    const response = await api.get('/users/me')

    return response.data
  }

  return (
    <AppLayoutContainer>
      <Header>
        <Image src={Logo} alt="" />

        <span>{me?.name}</span>
      </Header>

      <Content>
        <Navbar />

        {children}
      </Content>
    </AppLayoutContainer>
  )
}
