import { CaretLeft } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { ButtonGoBack } from '../Exercises/styles'
import { NameContainer } from './styles'

export function Name() {
  const { prevStep } = useContext(StepsCreateTrainingContext)

  const theme = useTheme()

  return (
    <NameContainer>
      <ButtonGoBack onClick={prevStep}>
        <CaretLeft size={20} color={theme['gray-500']} />
      </ButtonGoBack>

      <form autoComplete="off">
        <Input
          name="name"
          label="Dê um nome para o seu treino"
          placeholder="Digite o nome do treino"
        />

        <Button title="Finalizar" />
      </form>
    </NameContainer>
  )
}
