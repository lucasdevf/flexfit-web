import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  all: unset;
  color: white;
  padding: 0.7rem 2rem;

  border-radius: 8px;
  font-weight: 600;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant, theme }) => css`
    background: ${variant === 'primary'
      ? theme['yellow-500']
      : theme['purple-500']};

    &:hover {
      background: ${variant === 'primary'
        ? theme['yellow-500']
        : theme['purple-600']};
    }
  `}
`
