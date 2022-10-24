import { InputHTMLAttributes } from 'react'
import { InputContainer, InputStyled } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...rest }: Props) {
  return (
    <InputContainer>
      <label htmlFor={rest.id}>{label}</label>

      <InputStyled id={rest?.id} name={rest?.name} {...rest} />
    </InputContainer>
  )
}
