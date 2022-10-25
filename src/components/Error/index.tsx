import { WarningCircle } from 'phosphor-react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ErrorContainer } from './styles'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  error: string
}

export function Error({ error, ...rest }: Props) {
  return (
    <ErrorContainer {...rest}>
      <WarningCircle size={28} />

      <span>{error}</span>
    </ErrorContainer>
  )
}
