import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { CaretLeft } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'

import * as z from 'zod'
import { CreateTrainingContext } from '../../../contexts/CreateTrainingContext'

import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { api } from '../../../services/api'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { ButtonGoBack } from '../Exercises/styles'
import { NameContainer } from './styles'

const formSchema = z.object({
  name: z.string().min(1, 'Este campo é obrigatório'),
})

type FormSchemaType = z.infer<typeof formSchema>

export function Name() {
  const { prevStep } = useContext(StepsCreateTrainingContext)

  const { training } = useContext(CreateTrainingContext)

  const theme = useTheme()

  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  async function createTraining(data: FormSchemaType) {
    const { name } = data

    const { weekdays, exercises } = training

    await api.post('/trainings', {
      name,
      weekdays,
      exercises,
    })

    router.push('/trainings')
  }

  return (
    <NameContainer>
      <ButtonGoBack onClick={prevStep}>
        <CaretLeft size={20} color={theme['gray-500']} />
      </ButtonGoBack>

      <form autoComplete="off" onSubmit={handleSubmit(createTraining)}>
        <Input
          name="name"
          label="Dê um nome para o seu treino"
          placeholder="Digite o nome do treino"
          register={register}
          errors={errors}
        />

        <Button title="Finalizar" />
      </form>
    </NameContainer>
  )
}
