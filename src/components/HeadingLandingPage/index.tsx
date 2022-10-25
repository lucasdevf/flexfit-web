import { HeadingLandingPageContainer } from './styles'

interface Props {
  title: string
  subtitle: string
  centerTitle?: boolean
  centerSubtitle?: boolean
}

export function HeadingLandingPage({
  title,
  subtitle,
  centerTitle = false,
  centerSubtitle = false,
}: Props) {
  return (
    <HeadingLandingPageContainer
      centerTitle={centerTitle}
      centerSubtitle={centerSubtitle}
    >
      <strong>{title}</strong>

      <span>{subtitle}</span>
    </HeadingLandingPageContainer>
  )
}
