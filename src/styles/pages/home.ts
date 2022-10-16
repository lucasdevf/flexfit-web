import styled from 'styled-components'
import { Button } from '../../components/Button'

export const Main = styled.main`
  max-width: 1344px;
  margin: 0 auto;
  margin-top: 5rem;

  padding: 0 3rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 5rem;
`

export const Content = styled.div``

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;

  p {
    font-size: 1.75rem;
    color: ${({ theme }) => theme['purple-500']};

    span {
      color: ${({ theme }) => theme['yellow-500']};
    }
  }
`

export const ButtonExperiment = styled(Button)`
  margin-top: 2rem;
  width: 30rem;
`
