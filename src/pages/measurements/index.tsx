import { zodResolver } from '@hookform/resolvers/zod'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Ruler } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import * as z from 'zod'

import { Error } from '../../components/Error'
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Input'
import { MeasurementProps } from '../../components/Weight'
import { AppLayout } from '../../layouts/AppLayout'
import { api } from '../../services/api'
import {
  MeasurementsContainer,
  Form,
  Guidance,
  ButtonSave,
} from '../../styles/pages/measurements'

const formSchema = z.object({
  weight: z.string().min(1, 'Este campo é obrigatório'),
  height: z.string().min(1, 'Este campo é obrigatório'),
})

type FormSchemaType = z.infer<typeof formSchema>

interface Props {
  lastMeasurement: MeasurementProps
}

export default function Measurements({ lastMeasurement }: Props) {
  async function save(data: FormSchemaType) {
    const { weight, height } = data

    await api.post('/users/measurements', {
      weight: Number(weight),
      height: Number(height),
    })
  }

  const { mutate, error } = useMutation(
    '@create-measurement/measurements',
    save,
  )

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: String(lastMeasurement?.weight ?? ''),
      height: String(lastMeasurement?.height ?? ''),
    },
  })

  function disableButtonSave() {
    const weightInput = Number(watch('weight'))
    const heightInput = Number(watch('height'))

    if (lastMeasurement) {
      const { weight, height } = lastMeasurement

      if (weightInput === weight && heightInput === height) {
        return true
      }

      return false
    }

    return false
  }

  return (
    <AppLayout>
      <MeasurementsContainer>
        <Heading
          icon={<Ruler />}
          title="Medidas"
          subtitle="Cadastre e acompanhe a evolução de todas as suas medidas"
        />

        <Form autoComplete="off">
          <Input
            name="weight"
            label="Peso (kg)"
            placeholder="Digite o seu peso"
            register={register}
            errors={errors}
          />
          <Input
            name="height"
            label="Altura (m)"
            placeholder="Digite a sua altura"
            register={register}
            errors={errors}
          />

          <ButtonSave
            title="Salvar"
            disabled={disableButtonSave()}
            onClick={handleSubmit(mutate)}
          />
        </Form>

        {error ? <Error error={String(error)} style={{ marginTop: 28 }} /> : ''}

        <Guidance>
          * Recomendamos que a atualização desses valores seja feita apenas uma
          vez por mês
        </Guidance>
      </MeasurementsContainer>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  const response = await api.get('/users/measurements/last', {
    headers: {
      Authorization: `Bearer ${cookies['flexFit:access_token']}`,
    },
  })

  const lastMeasurement = response.data

  return {
    props: {
      lastMeasurement,
    },
  }
}
