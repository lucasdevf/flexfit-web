import { useContext, useEffect, useState } from 'react'
import { CreateTrainingContext } from '../../../contexts/CreateTrainingContext'
import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { Button } from '../../Button'
import { Checkbox } from '../../Checkbox'
import { WeekdaysContainer, WeekdaysList } from './styles'

export function Weekdays() {
  const { nextStep } = useContext(StepsCreateTrainingContext)

  const { handleChangeWeekdays, training } = useContext(CreateTrainingContext)

  const [weekdays, setWeekdays] = useState([
    {
      value: 0,
      name: 'Domingo',
      checked: false,
    },
    {
      value: 1,
      name: 'Segunda-feira',
      checked: false,
    },
    {
      value: 2,
      name: 'Terça-feira',
      checked: false,
    },
    {
      value: 3,
      name: 'Quarta-feira',
      checked: false,
    },
    {
      value: 4,
      name: 'Quinta-feira',
      checked: false,
    },
    {
      value: 5,
      name: 'Sexta-feira',
      checked: false,
    },
    {
      value: 6,
      name: 'Sábado',
      checked: false,
    },
  ])

  function handleCheck(weekdayNumber: number) {
    setWeekdays((weekdays) =>
      weekdays.map((item) =>
        item.value === weekdayNumber
          ? { ...item, checked: !item.checked }
          : item,
      ),
    )
  }

  function handleContinue() {
    nextStep()

    handleChangeWeekdays(
      weekdays.filter((item) => item.checked).map((item) => item.value),
    )
  }

  useEffect(() => {
    const weekdaysContext = training.weekdays

    if (weekdaysContext?.length > 0) {
      setWeekdays((prevState) =>
        prevState.map((item) => {
          if (weekdaysContext.some((weekday) => weekday === item.value)) {
            item.checked = true
          }

          return item
        }),
      )
    }
  }, [])

  return (
    <WeekdaysContainer>
      <span>Para quais dias você deseja criar o treino?</span>

      <WeekdaysList>
        {weekdays.map((weekday) => (
          <Checkbox
            key={weekday.value}
            checked={weekday.checked}
            label={weekday.name}
            onCheck={() => handleCheck(weekday.value)}
          />
        ))}
      </WeekdaysList>

      {weekdays.find((item) => item.checked) && (
        <Button title="Continuar" onClick={handleContinue} />
      )}
    </WeekdaysContainer>
  )
}
