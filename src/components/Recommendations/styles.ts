import Image from 'next/future/image'
import styled from 'styled-components'

export const RecommendationsContainer = styled.section`
  max-width: 1344px;
  margin: 0 auto;

  padding: 3rem 0;
`

export const RecommendationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;

  margin-top: 3rem;
`

export const Recommendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: 0px 1px 10px rgba(130, 130, 130, 0.25);
  border-radius: 8px;
  overflow: hidden;

  padding: 1rem;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      span {
        color: ${({ theme }) => theme['gray-600']};
      }
    }
  }

  p {
    text-align: justify;
  }
`

export const UserPhoto = styled(Image)`
  border-radius: 999px;
`
