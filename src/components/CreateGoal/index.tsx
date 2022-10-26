import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import * as z from 'zod'
import { api } from '../../services/api'

import { Button } from '../Button'
import { Error } from '../Error'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { NewGoalContainer } from './styles'

const formSchema = z.object({
  name: z.string().min(1, 'Este campo é obrigatório'),
  value: z.string().min(1, 'Este campo é obrigatório'),
  deadline: z.string().min(1, 'Este campo é obrigatório'),
})

type FormSchemaType = z.infer<typeof formSchema>

interface Props {
  id?: string
  onClose: () => void
}

export function CreateGoal({ onClose }: Props) {
  const queryClient = useQueryClient()

  async function saveGoal(data: FormSchemaType) {
    const { name, value, deadline } = data

    await api.post('/goals', {
      name,
      value: Number(value),
      deadline,
    })

    await queryClient.refetchQueries('@goals/goals')

    reset()
    onClose()
  }

  const { mutate, isLoading, error } = useMutation(
    '@create-goal/modal-create-goal',
    saveGoal,
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Modal title="Criar meta">
      <NewGoalContainer>
        <p>Preencha os campos e cadastre sua meta</p>

        <form onSubmit={handleSubmit(mutate)} autoComplete="off">
          <Input
            label="Nome"
            name="name"
            placeholder="Digite um nome pra sua meta..."
            register={register}
            errors={errors}
          />
          <Input
            label="Valor que você quer alcançar"
            name="value"
            placeholder="Digite o valor..."
            register={register}
            errors={errors}
            type="number"
          />
          <Input
            label="Data que você quer alcançar sua meta"
            name="deadline"
            type="date"
            register={register}
            errors={errors}
          />

          {error ? <Error error={String(error)} /> : ''}

          <Button title="Criar meta" isLoading={isLoading} />
        </form>
      </NewGoalContainer>
    </Modal>
  )
}
