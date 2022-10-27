import styled from 'styled-components'

export const ExerciseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
  padding: 1rem 0;

  strong {
    color: ${({ theme }) => theme['gray-700']};
  }

  span {
    margin-left: 4px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme['gray-500']};
  }

  &:last-child {
    border-bottom: none;
  }
`

export const ButtonDelete = styled.button`
  all: unset;
  padding: 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme['gray-100']};
  }
`
