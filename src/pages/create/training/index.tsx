import { useContext, useEffect } from 'react'
import { Exercises } from '../../../components/CreateTraining/Exercises'
import { Name } from '../../../components/CreateTraining/Name'
import { Weekdays } from '../../../components/CreateTraining/Weekdays'
import { Heading } from '../../../components/Heading'
import { MultiStep } from '../../../components/MultiStep'
import { CreateTrainingContext } from '../../../contexts/CreateTrainingContext'
import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { AppLayout } from '../../../layouts/AppLayout'
import { CreateTrainingContainer } from '../../../styles/pages/create-training'

export default function CreateTraining() {
  const { currentStep, resetStep } = useContext(StepsCreateTrainingContext)

  const { clearContext } = useContext(CreateTrainingContext)

  const steps = [<Weekdays key={0} />, <Exercises key={1} />, <Name key={2} />]

  useEffect(() => {
    clearContext()

    resetStep()
  }, [])

  return (
    <AppLayout>
      <CreateTrainingContainer>
        <Heading
          title="Criar treino"
          subtitle="Preencha os campos para criar o seu treino"
        />

        <MultiStep steps={steps} currentStep={currentStep} />
      </CreateTrainingContainer>
    </AppLayout>
  )
}
