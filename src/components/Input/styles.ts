import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

interface InputStyledProps {
  isError: boolean
}

export const InputStyled = styled.input<InputStyledProps>`
  all: unset;

  padding: 1rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, isError }) => (isError ? theme['red-500'] : theme['gray-400'])};

  &:hover {
    border-color: ${({ theme, isError }) =>
      isError ? theme['red-500'] : theme['gray-600']};
  }

  &:focus {
    border-color: ${({ theme, isError }) =>
      isError ? theme['red-500'] : theme['yellow-500']};
  }
`

export const MessageError = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-size: 0.8rem;

  margin-top: 0.3rem;
`
