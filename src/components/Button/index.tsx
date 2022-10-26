import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'
import { ButtonContainer, ButtonVariant } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: ButtonVariant
  icon?: ReactNode
  isLoading?: boolean
}

export function Button({
  title,
  icon,
  isLoading,
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <ButtonContainer
      {...rest}
      variant={variant}
      disabled={rest.disabled || isLoading}
    >
      {isLoading ? (
        <ClipLoader color="white" size={16} />
      ) : (
        <>
          {icon && icon}
          {title}
        </>
      )}
    </ButtonContainer>
  )
}
