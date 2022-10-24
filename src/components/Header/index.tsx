/* NEXT */
import Image from 'next/future/image'
import Link from 'next/link'

/* STYLES */
import {
  HeaderContainer,
  Content,
  Menu,
  AccountOptions,
  ButtonCreateAccount,
} from './styles'

/* ASSETS */
import Logo from '../../assets/logo-white.svg'
import { Button } from '../Button'
import { SignIn } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <Image src={Logo} alt="" />

        <Menu>
          <li>Home</li>
          <li>Blog</li>
          <li>Dúvidas</li>
          <li>Baixe o app</li>
        </Menu>

        <AccountOptions>
          <Link href="/">
            <ButtonCreateAccount>Criar conta</ButtonCreateAccount>
          </Link>

          <Link href="/login">
            <Button
              title="Entrar"
              icon={<SignIn size={20} />}
              variant="secondary"
            />
          </Link>
        </AccountOptions>
      </Content>
    </HeaderContainer>
  )
}
