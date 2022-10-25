import styled from 'styled-components'

export const HeadingContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    strong {
      font-size: 1.3rem;
    }

    svg {
      color: ${({ theme }) => theme['purple-500']};
      font-size: 1.3rem;
    }
  }
`

export const Subtitle = styled.span`
  display: flex;
  margin-top: 8px;
  color: ${({ theme }) => theme['gray-700']};
`
