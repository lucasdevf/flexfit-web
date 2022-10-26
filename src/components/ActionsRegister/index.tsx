import { PencilSimpleLine, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ActionsRegisterContainer, Button } from './styles'

export function ActionsRegister() {
  const theme = useTheme()

  return (
    <ActionsRegisterContainer>
      <Button>
        <PencilSimpleLine size={16} color={theme['gray-900']} />
      </Button>
      <Button>
        <Trash size={16} color={theme['gray-900']} />
      </Button>
    </ActionsRegisterContainer>
  )
}
