import styled from 'styled-components'
import { Button } from '../../components/Button'

export const MeasurementsContainer = styled.div``

export const Form = styled.form`
  margin-top: 2rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const Guidance = styled.span`
  display: flex;
  color: ${({ theme }) => theme['gray-500']};
  margin-top: 28px;
`

export const ButtonSave = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
`
