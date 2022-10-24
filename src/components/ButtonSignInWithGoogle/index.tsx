import Image from 'next/future/image'
import { ButtonHTMLAttributes } from 'react'
import { ButtonSignInWithGoogleContainer } from './styles'

import LogoGoogle from '../../assets/logo-google.png'

export function ButtonSignInWithGoogle(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <ButtonSignInWithGoogleContainer {...props}>
      <Image src={LogoGoogle} alt="" width={16} height={16} />
      Entrar com Google
    </ButtonSignInWithGoogleContainer>
  )
}
