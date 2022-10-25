import { ReactNode } from 'react'
import { AppLayoutContainer, Header, Content } from './styles'

import Logo from '../../assets/logo.svg'
import Image from 'next/future/image'
import { Navbar } from './components/Navbar'

interface Props {
  children: ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <AppLayoutContainer>
      <Header>
        <Image src={Logo} alt="" />

        <span>Lucas Ferreira</span>
      </Header>

      <Content>
        <Navbar />

        {children}
      </Content>
    </AppLayoutContainer>
  )
}
