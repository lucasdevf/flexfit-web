import styled from 'styled-components'

export const AppLayoutContainer = styled.div`
  padding-bottom: 4rem;
`

export const Header = styled.header`
  padding: 2rem 0;

  max-width: 1344px;
  margin: 0 auto;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};

  span {
    color: ${({ theme }) => theme['gray-700']};
    font-weight: 500;
  }
`

export const Content = styled.div`
  max-width: 1344px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
`
