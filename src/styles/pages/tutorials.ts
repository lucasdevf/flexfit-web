import styled from 'styled-components'

export const TutorialsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const Exercises = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const Exercise = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme['gray-300']};

  &:hover {
    img {
      transform: scale(1.01);
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  background: red;

  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
`

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`
