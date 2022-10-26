import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import { CloseButton, Content, ModalContainer, Overlay } from './styles'

interface Props {
  title?: string
  children: ReactNode
}

export function Modal({ title, children }: Props) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <header>
          {title && <Dialog.Title>{title}</Dialog.Title>}

          <CloseButton>
            <Dialog.Close asChild>
              <button>
                <X size={24} />
              </button>
            </Dialog.Close>
          </CloseButton>
        </header>

        <ModalContainer>{children}</ModalContainer>
      </Content>
    </Dialog.Portal>
  )
}
