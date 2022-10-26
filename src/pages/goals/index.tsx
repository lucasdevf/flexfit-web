import { Crosshair } from 'phosphor-react'
import { useQuery } from 'react-query'
import { Goal, GoalProps } from '../../components/Goal'
import { Heading } from '../../components/Heading'
import { AppLayout } from '../../layouts/AppLayout'
import { api } from '../../services/api'
import {
  ButtonCreate,
  GoalsContainer,
  GoalsList,
} from '../../styles/pages/goals'

export default function Goals() {
  const { data: goals } = useQuery<GoalProps[]>('@goals/goals', fetchGoals)

  async function fetchGoals() {
    const response = await api.get('/goals')

    return response.data
  }

  return (
    <AppLayout>
      <GoalsContainer>
        <Heading
          icon={<Crosshair />}
          title="Metas"
          subtitle="Cadastre e acompanhe suas metas"
        />

        <ButtonCreate title="Criar meta" />

        <GoalsList>
          {goals?.map((goal) => (
            <Goal key={goal.id} data={goal} />
          ))}
        </GoalsList>
      </GoalsContainer>
    </AppLayout>
  )
}
