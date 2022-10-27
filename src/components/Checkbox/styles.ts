import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;

  border: 1px solid ${({ theme }) => theme['gray-300']};
  height: 20px;
  width: 20px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`
