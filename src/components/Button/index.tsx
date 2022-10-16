import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: ButtonVariant
  icon?: ReactNode
}

export function Button({ title, icon, variant = 'primary', ...rest }: Props) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {icon}
      {title}
    </ButtonContainer>
  )
}
