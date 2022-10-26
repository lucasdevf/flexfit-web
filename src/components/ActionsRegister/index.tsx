import { PencilSimpleLine, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { ActionsRegisterContainer, Button } from './styles'

export function ActionsRegister() {
  const theme = useTheme()

  return (
    <ActionsRegisterContainer>
      <Button>
        <PencilSimpleLine size={16} color={theme['gray-900']} />
      </Button>

      <AlertDialog.Trigger asChild>
        <Button>
          <Trash size={16} color={theme['gray-900']} />
        </Button>
      </AlertDialog.Trigger>
    </ActionsRegisterContainer>
  )
}
