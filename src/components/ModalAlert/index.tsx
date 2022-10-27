import { Content, Description, Overlay, Footer, CancelButton } from './styles'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { Button } from '../Button'

interface Props {
  title: string
  description?: string
  onConfirm: () => void
  isLoading?: boolean
  onClose: () => void
}

export function ModalAlert({
  title,
  description,
  onConfirm,
  isLoading,
  onClose,
}: Props) {
  function handleConfirm() {
    onConfirm()
    onClose()
  }

  return (
    <AlertDialog.Portal>
      <Overlay>
        <Content>
          <AlertDialog.Title>{title}</AlertDialog.Title>

          <Description>{description}</Description>

          <Footer>
            <AlertDialog.Cancel asChild>
              <CancelButton>Cancelar</CancelButton>
            </AlertDialog.Cancel>
            <Button
              title="Sim, quero excluir"
              isLoading={isLoading}
              onClick={handleConfirm}
            />
          </Footer>
        </Content>
      </Overlay>
    </AlertDialog.Portal>
  )
}
