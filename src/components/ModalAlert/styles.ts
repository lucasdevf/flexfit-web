import styled from 'styled-components'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
`

export const Content = styled(AlertDialog.Content)`
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

export const Description = styled(AlertDialog.Description)`
  margin-top: 1rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  margin-top: 2rem;
`

export const CancelButton = styled.button`
  all: unset;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme['gray-700']};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme['gray-900']};
  }
`
