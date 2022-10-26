import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  all: unset;
  color: white;
  padding: 1rem 2rem;

  border-radius: 8px;
  font-weight: 600;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-size: 0.9rem;

  ${({ variant, theme }) => css`
    background: ${variant === 'primary'
      ? theme['yellow-500']
      : theme['purple-500']};

    &:hover:not(:disabled) {
      background: ${variant === 'primary'
        ? theme['yellow-600']
        : theme['purple-600']};
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
