import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  gap: 4rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 20vw;

    @media only screen and (max-width: 1024px) {
      width: 40vw;
    }

    @media only screen and (max-width: 425px) {
      width: 90vw;
    }
  }
`

export const NoHaveAccount = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme['gray-500']};
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme['purple-500']};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`
