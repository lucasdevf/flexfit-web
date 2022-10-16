import styled from 'styled-components'

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-900']};
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-600']};
    line-height: 2rem;
  }
`
