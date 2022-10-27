import Head from 'next/head'
import { Image as ImageIcon } from 'phosphor-react'

import { useKeenSlider } from 'keen-slider/react'

import { useTheme } from 'styled-components'
import { Heading } from '../../components/Heading'
import { StatusTraining } from '../../components/StatusTraining'
import { Weight } from '../../components/Weight'
import { AppLayout } from '../../layouts/AppLayout'
import {
  HomeContainer,
  Content,
  ImagesContainer,
  ImagesList,
  AddImage,
} from '../../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import {
  ImageHistoric,
  ImageHistoryProps,
} from '../../components/ImageHistoric'
import { Checkbox } from '../../components/Checkbox'
import { useQuery } from 'react-query'
import { api } from '../../services/api'

export default function Home() {
  const theme = useTheme()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 48,
    },
  })

  const { data: imagesHistory } = useQuery<ImageHistoryProps[]>(
    '@images-history/home',
    fetchImagesHistory,
  )

  async function fetchImagesHistory() {
    const response = await api.get('/images-history')

    return response.data
  }

  return (
    <AppLayout>
      <Head>
        <title>Home | FlexFit</title>
      </Head>

      <HomeContainer>
        <Content>
          <header>
            <Checkbox
              label="Você realizou o treino de hoje (16/10) ?"
              checked={false}
              onCheck={() => {}}
            />

            <StatusTraining />
          </header>

          <Weight />
        </Content>

        <ImagesContainer>
          <Heading
            icon={
              <ImageIcon size={24} color={theme['purple-500']} weight="fill" />
            }
            title="Fotos"
            subtitle="Adicione fotos para acompanhar sua evolução"
          />

          <ImagesList ref={sliderRef} className="keen-slider">
            <AddImage className="keen-slider__slide">
              <span>Adicionar imagem</span>
            </AddImage>

            {imagesHistory?.map((image) => (
              <ImageHistoric key={image.image_name} data={image} />
            ))}
          </ImagesList>
        </ImagesContainer>
      </HomeContainer>
    </AppLayout>
  )
}
