import { useContext } from 'react'
import { CreateTrainingProvider } from '../../contexts/CreateTrainingContext'
import { StepsCreateTrainingContext } from '../../contexts/StepsCreateTrainingContext'
import { Modal } from '../Modal'
import { MultiStep } from '../MultiStep'
import { Exercises } from './components/Exercises'
import { Name } from './components/Name'
import { Weekdays } from './components/Weekdays'
import { CreateTrainingContainer } from './styles'

export function CreateTraining() {
  const { currentStep } = useContext(StepsCreateTrainingContext)

  const steps = [<Weekdays key={0} />, <Exercises key={1} />, <Name key={2} />]

  console.log(currentStep)

  return (
    <Modal title="Criar treino">
      <CreateTrainingProvider>
        <CreateTrainingContainer>
          <MultiStep steps={steps} currentStep={currentStep} />
        </CreateTrainingContainer>
      </CreateTrainingProvider>
    </Modal>
  )
}
