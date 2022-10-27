import { ReactNode } from 'react'
import { StepsContainer, Label, Steps, Step, Content } from './styles'

interface Props {
  steps: ReactNode[]
  currentStep: number
}

export function MultiStep({ steps, currentStep }: Props) {
  return (
    <StepsContainer>
      <header>
        <Label>
          Passo {currentStep} de {steps.length}
        </Label>

        <Steps>
          {steps.map((step, index) => (
            <Step key={index + 1} active={index + 1 === currentStep} />
          ))}
        </Steps>
      </header>

      <Content>{steps.filter((_, index) => index + 1 === currentStep)}</Content>
    </StepsContainer>
  )
}
