import styled from 'styled-components'

export const NewGoalContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme['gray-700']};
  }
`
