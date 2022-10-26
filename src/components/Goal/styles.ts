import styled from 'styled-components'

export const GoalContainer = styled.div`
  margin-top: 1rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 8px;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  footer {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const ItemGoal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  span {
    font-size: 0.9rem;
  }
`
