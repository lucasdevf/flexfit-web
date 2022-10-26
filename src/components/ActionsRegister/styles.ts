import styled from 'styled-components'

export const ActionsRegisterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Button = styled.button`
  all: unset;

  cursor: pointer;
  background: ${({ theme }) => theme['gray-100']};
  padding: 0.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: cente;

  &:hover {
    background: ${({ theme }) => theme['gray-200']};
  }
`
