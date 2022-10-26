import { ImageHistoricContainer, Image } from './styles'

import WomanGym from '../../assets/woman-gym.jpg'
import { ArrowsOut, Share, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function ImageHistoric() {
  const theme = useTheme()

  return (
    <ImageHistoricContainer className="keen-slider__slide">
      <Image src={WomanGym} alt="" height={284} />

      <footer>
        <Trash color={theme.white} size={20} />
        <ArrowsOut color={theme.white} size={20} />
        <Share color={theme.white} size={20} />
      </footer>
    </ImageHistoricContainer>
  )
}
