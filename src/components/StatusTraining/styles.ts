import styled, { css } from 'styled-components'

export const StatusTrainingContainer = styled.div`
  margin-bottom: 3rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme['gray-100']};
    border: 1px solid ${theme['gray-200']};

    padding: 16px;
    border-radius: 8px;
  `}

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme['gray-900']};
  }
`
