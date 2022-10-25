import { useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'
import { useTheme } from 'styled-components'
import { api } from '../../services/api'
import { Error } from '../Error'
import { WeightContainer } from './styles'

export interface MeasurementProps {
  id: string
  weight: number
  height: number
}

export function Weight() {
  const theme = useTheme()

  const {
    data: measurement,
    isLoading,
    error,
  } = useQuery<MeasurementProps>(
    '@last-measurement/component-weight',
    fetchLastMeasurement,
  )

  async function fetchLastMeasurement() {
    const response = await api.get('/users/measurements/last')

    return response.data
  }

  return (
    <>
      <WeightContainer>
        <div>
          {isLoading ? (
            <ClipLoader size={20} color={theme['gray-500']} />
          ) : (
            <strong>{measurement?.weight} kg</strong>
          )}
          <span>peso atual</span>
        </div>
      </WeightContainer>
      {error ? <Error error={String(error)} /> : ''}
    </>
  )
}
