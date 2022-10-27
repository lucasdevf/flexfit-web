import Head from 'next/head'
import { Barbell } from 'phosphor-react'
import { useQuery } from 'react-query'

import * as Dialog from '@radix-ui/react-dialog'

import { Heading } from '../../components/Heading'
import { Training } from '../../components/Training'
import { AppLayout } from '../../layouts/AppLayout'
import { api } from '../../services/api'
import {
  ButtonCreate,
  TrainingsContainer,
  TrainingsList,
} from '../../styles/pages/trainings'
import { CreateTraining } from '../../components/CreateTraining'
import { StepsCreateTrainingContextProvider } from '../../contexts/StepsCreateTrainingContext'
import Link from 'next/link'

export interface TrainingProps {
  id: string
  name: string
  weekdays: number[]
  created_at: string
}

export default function Trainings() {
  const { data: trainings } = useQuery<TrainingProps[]>(
    '@trainigs/trainings',
    fetchTrainings,
  )

  async function fetchTrainings() {
    const response = await api.get('/trainings')

    return response.data
  }

  return (
    <AppLayout>
      <Head>
        <title>Treinos | FlexFit</title>
      </Head>

      <TrainingsContainer>
        <Heading
          icon={<Barbell />}
          title="Meus treinos"
          subtitle="Visualize e gerencie todos os seus treinos"
        />

        <Link href="/create/training">
          <ButtonCreate title="Criar treino" />
        </Link>

        <TrainingsList>
          {trainings?.map((training) => (
            <Training data={training} key={training.id} />
          ))}
        </TrainingsList>
      </TrainingsContainer>
    </AppLayout>
  )
}
