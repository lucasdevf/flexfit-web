import styled from 'styled-components'

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`

export const Label = styled.span`
  color: ${({ theme }) => theme['gray-500']};
  font-size: 0.8rem;
`

export const Steps = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

interface StepProps {
  active: boolean
}

export const Step = styled.button<StepProps>`
  all: unset;

  height: 8px;
  width: ${(props) => (props.active ? '1.5rem' : '1rem')};

  background: ${({ theme, active }) =>
    active ? theme['purple-300'] : theme['gray-200']};
  border-radius: 999px;

  cursor: pointer;
`

export const Content = styled.div`
  margin-top: 0.5rem;
`
