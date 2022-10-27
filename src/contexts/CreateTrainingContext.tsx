import { createContext, ReactNode, useCallback, useState } from 'react'
import { ExerciseProps } from '../components/Exercise'

interface CreateTrainingProps {
  name: string
  weekdays: number[]
  exercises: ExerciseProps[]
}

interface CreateTrainingType {
  training: CreateTrainingProps
  handleChangeWeekdays: (weekdays: number[]) => void
  handleChangeName: (name: string) => void
  handleAddExercise: (exercise: ExerciseProps) => void
  handleRemoveExercise: (exercise: ExerciseProps) => void
  clearContext: () => void
}

export const CreateTrainingContext = createContext({} as CreateTrainingType)

interface CreateTrainingContextProviderProps {
  children: ReactNode
}

export function CreateTrainingContextProvider({
  children,
}: CreateTrainingContextProviderProps) {
  const [training, setTraining] = useState({} as CreateTrainingProps)

  const handleChangeWeekdays = useCallback(
    (weekdays: number[]) => {
      setTraining((prevState) => ({ ...prevState, weekdays }))
    },
    [training],
  )

  const handleChangeName = useCallback(
    (name: string) => {
      setTraining((prevState) => ({ ...prevState, name }))
    },
    [training],
  )

  const handleAddExercise = useCallback(
    (exercise: ExerciseProps) => {
      const exerciseAlreadyAdded = training.exercises?.find(
        (item) => item.name === exercise.name,
      )

      if (exerciseAlreadyAdded) throw Error('Este exercício já foi adicionado.')

      setTraining((prevState) => ({
        ...prevState,
        exercises:
          prevState.exercises?.length > 0
            ? [...prevState.exercises, exercise]
            : [exercise],
      }))
    },
    [training],
  )

  const handleRemoveExercise = useCallback(
    (exercise: ExerciseProps) => {
      setTraining((prevState) => ({
        ...prevState,
        exercises: prevState.exercises.filter(
          (item) => item.name !== exercise.name,
        ),
      }))
    },
    [training],
  )

  const clearContext = useCallback(() => {
    setTraining({} as CreateTrainingProps)
  }, [training])

  return (
    <CreateTrainingContext.Provider
      value={{
        training,
        handleChangeWeekdays,
        handleChangeName,
        handleAddExercise,
        handleRemoveExercise,
        clearContext,
      }}
    >
      {children}
    </CreateTrainingContext.Provider>
  )
}
