import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { CreateTrainingContext } from '../../contexts/CreateTrainingContext'
import { ExerciseContainer, ButtonDelete } from './styles'

export interface ExerciseProps {
  id?: string
  name: string
  series: number
  repetitions: number
  created_at?: string
  updated_at?: string
}

interface Props {
  data: ExerciseProps
}

export function Exercise({ data }: Props) {
  const theme = useTheme()

  const { handleRemoveExercise } = useContext(CreateTrainingContext)

  return (
    <ExerciseContainer>
      <div>
        <strong>{data.name}</strong>
        <span>{`• ${data.series}x de ${data.repetitions} ${
          data.repetitions === 1 ? 'repetição' : 'repetições'
        }`}</span>
      </div>

      <ButtonDelete onClick={() => handleRemoveExercise(data)}>
        <Trash color={theme['red-500']} size={20} />
      </ButtonDelete>
    </ExerciseContainer>
  )
}
