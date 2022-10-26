import { Calendar, Crosshair } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { dateFormatter } from '../../utils/formatter'
import { ActionsRegister } from '../ActionsRegister'
import { GoalContainer, Content, ItemGoal } from './styles'

export interface GoalProps {
  id: string
  name: string
  value: number
  deadline: string
  conclusion_date: string
}

interface Props {
  data: GoalProps
}

export function Goal({ data }: Props) {
  const theme = useTheme()

  return (
    <GoalContainer>
      <Content>
        <strong>{data.name}</strong>

        <footer>
          <ItemGoal>
            <Calendar size={20} weight="regular" color={theme['gray-700']} />
            <span>
              Data limite{' '}
              {dateFormatter.format(new Date(data.deadline.split('T')[0]))}
            </span>
          </ItemGoal>

          <ItemGoal>
            <Crosshair />
            <span>{data.value}</span>
          </ItemGoal>
        </footer>
      </Content>

      <ActionsRegister />
    </GoalContainer>
  )
}
