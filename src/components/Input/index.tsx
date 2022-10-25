import { InputHTMLAttributes } from 'react'
import { InputContainer, InputStyled, MessageError } from './styles'

import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register?: UseFormRegister<any>
  errors?: FieldErrorsImpl<any>
}

export function Input({ label, register, errors, name, ...rest }: Props) {
  function messageError(): string {
    if (errors && name) {
      return errors[name]?.message as string
    }

    return ''
  }

  return (
    <InputContainer>
      <label htmlFor={rest.id}>{label}</label>

      <InputStyled
        id={rest?.id}
        name={name}
        isError={!!messageError()}
        {...(register && name && register(name))}
        {...rest}
      />

      {messageError() && <MessageError>{messageError()}</MessageError>}
    </InputContainer>
  )
}
