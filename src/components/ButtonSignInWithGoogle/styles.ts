import styled from 'styled-components'

export const ButtonSignInWithGoogleContainer = styled.button`
  all: unset;
  padding: 1rem 2rem;

  border-radius: 8px;
  font-weight: 600;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  border: 1px solid ${({ theme }) => theme['gray-200']};
  color: ${({ theme }) => theme['gray-700']};

  &:hover {
    background: ${({ theme }) => theme['gray-100']};
  }
`
