import { HeadingContainer } from './styles'

interface Props {
  title: string
  subtitle: string
  centerTitle?: boolean
}

export function Heading({ title, subtitle, centerTitle = false }: Props) {
  return (
    <HeadingContainer centerTitle={centerTitle}>
      <strong>{title}</strong>

      <span>{subtitle}</span>
    </HeadingContainer>
  )
}
