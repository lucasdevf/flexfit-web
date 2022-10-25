import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme['red-100']};
  padding: 1rem;
  border-radius: 8px;

  color: ${(props) => props.theme['red-500']};
`
