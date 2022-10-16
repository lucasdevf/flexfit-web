import styled from 'styled-components'

interface HeadingContainerProps {
  centerTitle: boolean
}

export const HeadingContainer = styled.div<HeadingContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-900']};
    text-align: ${({ centerTitle }) => (centerTitle ? 'center' : 'start')};
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-600']};
    line-height: 2rem;

    text-align: justify;
  }
`
