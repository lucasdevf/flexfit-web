import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'

import { TrainingProps } from '../../pages/trainings'
import { ActionsRegister } from '../ActionsRegister'
import { TrainingContainer, Content } from './styles'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { ModalAlert } from '../ModalAlert'
import { api } from '../../services/api'
import { Error } from '../Error'

interface Props {
  data: TrainingProps
}

export function Training({ data }: Props) {
  const queryClient = useQueryClient()

  const [openModalDelete, setOpenModalDelete] = useState(false)

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

  async function handleDelete() {
    await api.delete(`/trainings/${data.id}`)

    const trainings = queryClient.getQueryData<TrainingProps[]>(
      '@trainigs/trainings',
    )

    const newTrainings = trainings?.filter((item) => item.id !== data.id)

    queryClient.setQueryData('@trainigs/trainings', newTrainings)
  }

  const { mutate, isLoading, error } = useMutation(
    '@delete-training/training',
    handleDelete,
  )

  return (
    <TrainingContainer>
      <Content>
        <strong>{data.name}</strong>

        <span>{renderWeekdays()}</span>

        {error ? <Error error={String(error)} /> : ''}
      </Content>

      <AlertDialog.Root
        open={openModalDelete}
        onOpenChange={setOpenModalDelete}
      >
        <ActionsRegister />

        <ModalAlert
          title="Excluir treino"
          description={`Você deseja realmente excluir o treino ${data.name}?`}
          onConfirm={() => mutate()}
          isLoading={isLoading}
          onClose={() => setOpenModalDelete((prevState) => !prevState)}
        />
      </AlertDialog.Root>
    </TrainingContainer>
  )
}
