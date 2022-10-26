import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 4px;
  padding: 2.5rem 3rem;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }
`

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: transparent;
  border: none;

  flex: 1;

  button {
    background: transparent;
    border: none;

    color: ${(props) => props.theme['gray-500']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const ModalContainer = styled.div`
  width: 100%;
`
