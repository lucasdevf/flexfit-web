import { ButtonContainer, ButtonVariant } from './styles'

interface Props {
  title: string
  variant?: ButtonVariant
}

export function Button({ title, variant = 'primary' }: Props) {
  return <ButtonContainer variant={variant}>{title}</ButtonContainer>
}
