import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const InputStyled = styled.input`
  all: unset;

  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme['gray-400']};

  &:hover {
    border-color: ${({ theme }) => theme['gray-600']};
  }

  &:focus {
    border-color: ${({ theme }) => theme['yellow-500']};
  }
`
