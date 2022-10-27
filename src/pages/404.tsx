import { Prohibit } from 'phosphor-react'
import { AppLayout } from '../layouts/AppLayout'
import { NotFoundContainer } from '../styles/pages/404'

export default function NotFound() {
  return (
    <AppLayout>
      <NotFoundContainer>
        <Prohibit />

        <span>Página não encontrada</span>
      </NotFoundContainer>
    </AppLayout>
  )
}
