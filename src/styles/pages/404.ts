import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.5rem;

  span,
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-500']};
  }
`
