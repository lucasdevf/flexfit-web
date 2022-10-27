import { useContext } from 'react'
import { Exercises } from '../../../components/CreateTraining/Exercises'
import { Name } from '../../../components/CreateTraining/Name'
import { Weekdays } from '../../../components/CreateTraining/Weekdays'
import { Heading } from '../../../components/Heading'
import { MultiStep } from '../../../components/MultiStep'
import { StepsCreateTrainingContext } from '../../../contexts/StepsCreateTrainingContext'
import { AppLayout } from '../../../layouts/AppLayout'
import { CreateTrainingContainer } from '../../../styles/pages/create-training'

export default function CreateTraining() {
  const { currentStep } = useContext(StepsCreateTrainingContext)

  const steps = [<Weekdays key={0} />, <Exercises key={1} />, <Name key={2} />]

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
