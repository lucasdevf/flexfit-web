import { HeadingContainer } from './styles'

interface Props {
  title: string
  subtitle: string
}

export function Heading({ title, subtitle }: Props) {
  return (
    <HeadingContainer>
      <strong>{title}</strong>

      <span>{subtitle}</span>
    </HeadingContainer>
  )
}
