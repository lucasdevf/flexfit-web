import { createContext, ReactNode, useCallback, useState } from 'react'

interface StepsCreateTrainingContextType {
  currentStep: number
  nextStep: () => void
  prevStep: () => void
  resetStep: () => void
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

  const resetStep = useCallback(() => {
    setCurrentStep(1)
  }, [])

  return (
    <StepsCreateTrainingContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
        resetStep,
      }}
    >
      {children}
    </StepsCreateTrainingContext.Provider>
  )
}
