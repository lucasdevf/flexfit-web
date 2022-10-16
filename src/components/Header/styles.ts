import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['yellow-500']};
  padding: 1rem;

  position: sticky;
  top: 0;

  z-index: 2;
`

export const Content = styled.div`
  max-width: 1344px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`

export const Menu = styled.ul`
  margin-left: 7rem;

  li {
    display: inline;
    list-style: none;
    margin-right: 3rem;

    color: white;
    cursor: pointer;
    font-weight: 400;
  }
`

export const AccountOptions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  gap: 2rem;
`

export const ButtonCreateAccount = styled.button`
  all: unset;
  font-weight: 600;

  color: white;
  cursor: pointer;
`
