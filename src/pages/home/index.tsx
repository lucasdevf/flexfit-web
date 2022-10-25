import { StatusTraining } from '../../components/StatusTraining'
import { Weight } from '../../components/Weight'
import { AppLayout } from '../../layouts/AppLayout'
import { HomeContainer } from '../../styles/pages/home'

export default function Home() {
  return (
    <AppLayout>
      <HomeContainer>
        <StatusTraining />

        <Weight />
      </HomeContainer>
    </AppLayout>
  )
}
