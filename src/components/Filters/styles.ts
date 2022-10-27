import styled from 'styled-components'

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

interface FilterProps {
  active: boolean
}

export const Filter = styled.button<FilterProps>`
  all: unset;

  border-radius: 8px;
  padding: 0.5rem 2rem;
  cursor: pointer;

  background: ${({ active, theme }) =>
    active ? theme['yellow-500'] : theme['gray-200']};
  color: ${({ active, theme }) => (active ? theme.white : theme['gray-900'])};
  font-size: 0.9rem;
`
