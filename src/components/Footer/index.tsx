/* NEXT */
import Link from 'next/link'

/* STYLES */
import { FooterContainer, Links, RightsReserved } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <Links>
        <Link href="">Blog</Link>
        <Link href="">Como funciona</Link>
        <Link href="">Tire suas dúvidas</Link>
        <Link href="">Políticas de privacidade</Link>
        <Link href="">Termos de uso</Link>
      </Links>

      <RightsReserved>
        © Copyright 2022 - FlexFit - Todos os direitos reservados
      </RightsReserved>
    </FooterContainer>
  )
}
