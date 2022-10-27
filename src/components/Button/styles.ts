import styled, { css } from 'styled-components'

import { defaultTheme } from '../../styles/theme/default'

export type ButtonVariant = 'primary' | 'secondary' | 'blue'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: {
    background: defaultTheme['yellow-500'],
    hover: defaultTheme['yellow-600'],
  },
  secondary: {
    background: defaultTheme['purple-500'],
    hover: defaultTheme['purple-600'],
  },
  blue: {
    background: defaultTheme['blue-500'],
    hover: defaultTheme['blue-600'],
  },
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

  ${({ variant }) => css`
    background: ${buttonVariants[variant].background};

    &:hover:not(:disabled) {
      background: ${buttonVariants[variant].hover};
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
