import styled from 'styled-components'

export const FooterContainer = styled.footer`
  max-width: 1344px;
  margin: 0 auto;

  padding: 3rem 0;
  border-top: 1px solid ${({ theme }) => theme['gray-200']};

  @media only screen and (max-width: 1440px) {
    margin: 0 3rem;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const RightsReserved = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`
