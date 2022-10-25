import styled from 'styled-components'

export const MenuContainer = styled.aside``

export const Menu = styled.div`
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme['gray-400']};
    font-weight: 500;
    font-size: 0.8rem;
  }
`

export const Screens = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  gap: 1.5rem;
  margin-top: 1rem;
`

export const Screen = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-900']};
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }
`
