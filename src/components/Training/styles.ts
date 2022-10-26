import styled from 'styled-components'

export const TrainingContainer = styled.div`
  margin-top: 1rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 8px;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme['gray-500']};
    font-size: 0.9rem;
  }
`
