import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { CreateTrainingContext } from '../../../contexts/CreateTrainingContext'

import { Button } from '../../Button'
import { Error } from '../../Error'
import { Input } from '../../Input'
import { Modal } from '../../Modal'
import { AddExerciseContainer, Row } from './styles'

const formSchema = z.object({
  name: z.string().min(1, 'Este campo é obrigatório.'),
  series: z.string().min(1, 'Este campo é obrigatório'),
  repetitions: z.string().min(1, 'Este campo é obrigatório'),
})

type FormSchemaType = z.infer<typeof formSchema>

interface Props {
  onClose: () => void
}

export function AddExercise({ onClose }: Props) {
  const { handleAddExercise } = useContext(CreateTrainingContext)

  const [error, setError] = useState('')

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  function addExercise(data: FormSchemaType) {
    try {
      const { name, series, repetitions } = data

      handleAddExercise({
        name,
        series: Number(series),
        repetitions: Number(repetitions),
      })

      setError('')

      reset()

      onClose()
    } catch (err) {
      setError(String(err))
    }
  }

  return (
    <Modal title="Adicionar exercício">
      <AddExerciseContainer
        autoComplete="off"
        onSubmit={handleSubmit(addExercise)}
      >
        <Input
          name="name"
          label="Nome"
          placeholder="Digite o nome do exercício"
          register={register}
          errors={errors}
        />

        <Row>
          <Input
            name="series"
            label="Séries"
            placeholder="Nº séries"
            register={register}
            errors={errors}
            type="number"
          />
          <Input
            name="repetitions"
            label="Repetições"
            placeholder="Nº repetições"
            register={register}
            errors={errors}
            type="number"
          />
        </Row>

        {error && <Error error={error} />}

        <Button title="Adicionar" />
      </AddExerciseContainer>
    </Modal>
  )
}
