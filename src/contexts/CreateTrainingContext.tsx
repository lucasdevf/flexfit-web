import { createContext, ReactNode, useCallback, useState } from 'react'

export interface ExerciseProps {
  id?: string
  name: string
  series: number
  repetitions: number
  created_at?: string
  updated_at?: string
}

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

export const CreateTraining = createContext({} as CreateTrainingType)

interface CreateTrainingProviderProps {
  children: ReactNode
}

export function CreateTrainingProvider({
  children,
}: CreateTrainingProviderProps) {
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
    <CreateTraining.Provider
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
    </CreateTraining.Provider>
  )
}
