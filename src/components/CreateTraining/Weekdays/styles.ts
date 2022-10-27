import styled from 'styled-components'

export const WeekdaysContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const WeekdaysList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2rem;
  gap: 1rem;
`
