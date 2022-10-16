import styled from 'styled-components'

export const ExperimentContainer = styled.section`
  background: linear-gradient(180deg, #7152ff 0%, #532eff 100%);

  padding: 3rem 0;
  margin-top: 2rem;
`

export const Content = styled.div`
  max-width: 1344px;
  margin: 0 auto;

  h3 {
    font-size: 2.25rem;
    color: white;
    margin-bottom: 1rem;
  }

  span,
  p {
    color: white;
    font-size: 1.25rem;
  }

  p {
    margin-top: 3rem;
    line-height: 1.5rem;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  background: ${({ theme }) => theme['purple-300']};
  padding: 2rem;
  border-radius: 8px;

  width: 30rem;
  margin: 0 auto;
  margin-top: 4rem;

  span {
    font-size: 1rem;

    strong {
      font-size: 2.25rem;
    }
  }
`
