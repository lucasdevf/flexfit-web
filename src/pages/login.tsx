import Image from 'next/future/image'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '../components/Button'
import { ButtonSignInWithGoogle } from '../components/ButtonSignInWithGoogle'
import { Input } from '../components/Input'
import { LoginContainer, NoHaveAccount } from '../styles/pages/login'
import Logo from '../assets/logo.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Error } from '../components/Error'

const formSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(1, 'Este campo é obrigatório'),
})

type FormType = z.infer<typeof formSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const [error, setError] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: FormType) {
    setIsLoading(true)

    try {
      await signIn(data)
    } catch (err: any) {
      setError(err?.response?.data?.message ?? err?.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginContainer>
      <Image src={Logo} alt="" />

      <form onSubmit={handleSubmit(handleSignIn)} autoComplete="off">
        {error && <Error error={error} />}

        <Input
          label="E-mail"
          name="email"
          placeholder="Digite seu e-mail"
          errors={errors}
          register={register}
        />
        <Input
          label="Senha"
          name="password"
          placeholder="Digite sua senha"
          type="password"
          errors={errors}
          register={register}
        />

        <Button title="Entrar" isLoading={isLoading} />
        <ButtonSignInWithGoogle />

        <NoHaveAccount>
          Não tem uma conta?
          <Link href="/register">Cadastre-se</Link>
        </NoHaveAccount>
      </form>
    </LoginContainer>
  )
}
