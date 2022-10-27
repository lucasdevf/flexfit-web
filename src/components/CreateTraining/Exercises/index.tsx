import { CaretLeft } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { Button } from '../../Button'
import { ExercisesContainer, ButtonGoBack } from './styles'
import { AddExercise } from '../AddExercise'
import { CreateTrainingContext } from '../../../contexts/CreateTrainingContext'
import Head from 'next/head'
import { Exercise } from '../../Exercise'

export function Exercises() {
  const theme = useTheme()

  const [openAddExercise, setOpenAddExercise] = useState(false)

  const { training } = useContext(CreateTrainingContext)

  const { prevStep } = useContext(StepsCreateTrainingContext)

  return (
    <ExercisesContainer>
      <Head>
        <title>Criar treino | FlexFit</title>
      </Head>

      <ButtonGoBack onClick={prevStep}>
        <CaretLeft size={20} color={theme['gray-500']} />
      </ButtonGoBack>

      <header>
        <h1>Exercícios</h1>

        <Dialog.Root open={openAddExercise} onOpenChange={setOpenAddExercise}>
          <Dialog.Trigger asChild>
            <Button title="Adicionar exercício" variant="secondary" />
          </Dialog.Trigger>

          <AddExercise onClose={() => setOpenAddExercise(false)} />
        </Dialog.Root>
      </header>

      {training.exercises?.map((exercise) => (
        <Exercise data={exercise} key={exercise.name} />
      ))}
    </ExercisesContainer>
  )
}
