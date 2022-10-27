import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

export const ImagesContainer = styled.div`
  margin-top: 4rem;
`

export const ImagesList = styled.div`
  margin-top: 2rem;
  max-width: calc(((100vw - 1344px) * 2) - 7rem);
`

export const AddImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed ${({ theme }) => theme['gray-500']};
  border-radius: 8px;

  min-height: 284px;

  span {
    color: ${({ theme }) => theme['gray-500']};
  }
`
