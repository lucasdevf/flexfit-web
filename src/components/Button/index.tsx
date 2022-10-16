import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: ButtonVariant
}

export function Button({ title, variant = 'primary', ...rest }: Props) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {title}
    </ButtonContainer>
  )
}
