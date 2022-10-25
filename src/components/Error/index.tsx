import { WarningCircle } from 'phosphor-react'
import { ErrorContainer } from './styles'

interface Props {
  error: string
}

export function Error({ error }: Props) {
  return (
    <ErrorContainer>
      <WarningCircle size={28} />

      <span>{error}</span>
    </ErrorContainer>
  )
}
