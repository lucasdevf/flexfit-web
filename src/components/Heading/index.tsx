import { ReactNode } from 'react'
import { HeadingContainer, Subtitle } from './styles'

interface Props {
  icon?: ReactNode
  title: string
  subtitle?: string
}

export function Heading({ icon, title, subtitle }: Props) {
  return (
    <HeadingContainer>
      <header>
        {icon && icon}
        <strong>{title}</strong>
      </header>

      <Subtitle>{subtitle}</Subtitle>
    </HeadingContainer>
  )
}
