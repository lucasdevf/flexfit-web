import { Crosshair } from 'phosphor-react'
import { useQuery } from 'react-query'

import * as Dialog from '@radix-ui/react-dialog'

import { Goal, GoalProps } from '../../components/Goal'
import { Heading } from '../../components/Heading'
import { AppLayout } from '../../layouts/AppLayout'
import { api } from '../../services/api'
import {
  ButtonCreate,
  GoalsContainer,
  GoalsList,
} from '../../styles/pages/goals'
import { CreateGoal } from '../../components/CreateGoal'
import Head from 'next/head'
import { useState } from 'react'

export default function Goals() {
  const { data: goals } = useQuery<GoalProps[]>('@goals/goals', fetchGoals)

  async function fetchGoals() {
    const response = await api.get('/goals')

    return response.data
  }

  const [openModalCreateGoal, setOpenModalCreateGoal] = useState(false)

  return (
    <AppLayout>
      <Head>
        <title>Metas | FlexFit</title>
      </Head>

      <GoalsContainer>
        <Heading
          icon={<Crosshair />}
          title="Metas"
          subtitle="Cadastre e acompanhe suas metas"
        />

        <Dialog.Root
          open={openModalCreateGoal}
          onOpenChange={setOpenModalCreateGoal}
        >
          <Dialog.Trigger asChild>
            <ButtonCreate title="Criar meta" />
          </Dialog.Trigger>

          <CreateGoal onClose={() => setOpenModalCreateGoal(false)} />
        </Dialog.Root>

        <GoalsList>
          {goals?.map((goal) => (
            <Goal key={goal.id} data={goal} />
          ))}
        </GoalsList>
      </GoalsContainer>
    </AppLayout>
  )
}
