import styled from 'styled-components'

export const WeightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 164px;
  width: 164px;

  border-radius: 999px;
  position: relative;
  background: linear-gradient(#5552ff, #ee9d00);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: white;
    border-radius: 999px;

    height: 159px;
    width: 159px;

    gap: 0.5rem;

    strong {
      color: ${({ theme }) => theme['gray-700']};
      font-size: 2rem;
    }

    span {
      color: ${({ theme }) => theme['gray-500']};
    }
  }
`
