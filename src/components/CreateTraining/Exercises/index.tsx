import { CaretLeft } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { Button } from '../../Button'
import { ExercisesContainer, ButtonGoBack } from './styles'

export function Exercises() {
  const theme = useTheme()

  const { prevStep } = useContext(StepsCreateTrainingContext)

  return (
    <ExercisesContainer>
      <ButtonGoBack onClick={prevStep}>
        <CaretLeft size={20} color={theme['gray-500']} />
      </ButtonGoBack>

      <header>
        <h1>Exercícios</h1>
        <Button title="Adicionar exercício" variant="secondary" />
      </header>
    </ExercisesContainer>
  )
}
