import { createContext, ReactNode, useCallback, useState } from 'react'

interface StepsCreateTrainingContextType {
  currentStep: number
  nextStep: () => void
  prevStep: () => void
}

export const StepsCreateTrainingContext = createContext(
  {} as StepsCreateTrainingContextType,
)

interface StepsCreateTrainingContextProviderProps {
  children: ReactNode
}

export function StepsCreateTrainingContextProvider({
  children,
}: StepsCreateTrainingContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = useCallback(() => {
    setCurrentStep((currentStep) => currentStep + 1)
  }, [currentStep])

  const prevStep = useCallback(() => {
    setCurrentStep((currentStep) => currentStep - 1)
  }, [currentStep])

  return (
    <StepsCreateTrainingContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </StepsCreateTrainingContext.Provider>
  )
}
