import Image from 'next/future/image'
import Link from 'next/link'
import { Button } from '../components/Button'
import { ButtonSignInWithGoogle } from '../components/ButtonSignInWithGoogle'
import { Input } from '../components/Input'
import { LoginContainer, NoHaveAccount } from '../styles/pages/login'

import Logo from '../assets/logo.svg'

export default function Login() {
  return (
    <LoginContainer>
      <Image src={Logo} alt="" />

      <form>
        <Input label="E-mail" placeholder="Digite seu e-mail" />
        <Input label="Senha" placeholder="Digite sua senha" />

        <Button title="Entrar" />
        <ButtonSignInWithGoogle />

        <NoHaveAccount>
          Não tem uma conta?
          <Link href="/register">Cadastre-se</Link>
        </NoHaveAccount>
      </form>
    </LoginContainer>
  )
}
