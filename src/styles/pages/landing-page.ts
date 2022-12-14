import styled from 'styled-components'
import { Button } from '../../components/Button'

export const Main = styled.main`
  max-width: 1344px;
  margin: 0 auto;
  margin-top: 5rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 5rem;

  @media only screen and (max-width: 1440px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
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
