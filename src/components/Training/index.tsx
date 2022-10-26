import { TrainingProps } from '../../pages/trainings'
import { ActionsRegister } from '../ActionsRegister'
import { TrainingContainer, Content } from './styles'

interface Props {
  data: TrainingProps
}

export function Training({ data }: Props) {
  function renderWeekdays() {
    if (data.weekdays.length === 7) {
      return 'Todos os dias'
    }

    const weekdays: string[] = []

    data.weekdays.forEach((weekday) => {
      switch (weekday) {
        case 0:
          weekdays.push('DOM')
          break
        case 1:
          weekdays.push('SEG')
          break
        case 2:
          weekdays.push('TER')
          break
        case 3:
          weekdays.push('QUA')
          break
        case 4:
          weekdays.push('QUI')
          break
        case 5:
          weekdays.push('SEX')
          break
        case 6:
          weekdays.push('SAB')
          break
      }
    })

    return weekdays.join(' | ')
  }

  return (
    <TrainingContainer>
      <Content>
        <strong>{data.name}</strong>

        <span>{renderWeekdays()}</span>
      </Content>

      <ActionsRegister />
    </TrainingContainer>
  )
}
