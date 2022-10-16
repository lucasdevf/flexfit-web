import { HeadingContainer } from './styles'

interface Props {
  title: string
  subtitle: string
  centerTitle?: boolean
  centerSubtitle?: boolean
}

export function Heading({
  title,
  subtitle,
  centerTitle = false,
  centerSubtitle = false,
}: Props) {
  return (
    <HeadingContainer centerTitle={centerTitle} centerSubtitle={centerSubtitle}>
      <strong>{title}</strong>

      <span>{subtitle}</span>
    </HeadingContainer>
  )
}
