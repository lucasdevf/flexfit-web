/* NEXT */
import Image from 'next/future/image'

/* COMPONENTS */
import { HeadingLandingPage } from '../HeadingLandingPage'

/* ICONS */
import { ArrowsLeftRight, CaretLeft, CaretRight } from 'phosphor-react'

/* STYLES */
import { useTheme } from 'styled-components'
import {
  FeaturesContainer,
  Slider,
  SlideIcon,
  SliderItem,
  Feature,
  Details,
  ArrowButton,
} from './styles'

/* SLIDER */
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

/* COMPONENTS */
import { Button } from '../Button'

/* ASSETS */
import FeatureExercise from '../../assets/feature-exercise.svg'
import FeatureGoals from '../../assets/feature-goals.svg'

export function Features() {
  const theme = useTheme()

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 48,
    },
  })

  const features = [
    {
      title: 'Controle seu treino',
      description: `Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`,
      titleButton: 'Quero controlar meu treino',
      image: FeatureExercise,
    },
    {
      title: 'Controle sua dieta',
      description: `Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`,
      titleButton: 'Quero controlar minha dieta',
      image: FeatureExercise,
    },
    {
      title: 'Defina metas',
      description: `Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`,
      titleButton: 'Quero definir minhas metas',
      image: FeatureGoals,
    },
  ]

  function handlePreviousPage() {
    instanceRef.current?.prev()
  }

  function handleNextPage() {
    instanceRef.current?.next()
  }

  return (
    <FeaturesContainer>
      <HeadingLandingPage
        title="Funcionalidades do app"
        subtitle="Arraste para o lado para ver todas as funcionalidades"
      />

      <div ref={sliderRef} className="keen-slider">
        <Slider>
          <SlideIcon>
            <ArrowsLeftRight />
            <span>deslize</span>
          </SlideIcon>

          <ArrowButton style={{ left: 0 }} onClick={handlePreviousPage}>
            <CaretLeft size={28} color={theme['gray-600']} />
          </ArrowButton>

          {features.map((feature) => (
            <SliderItem key={feature.title} className="keen-slider__slide">
              <Feature>
                <Image src={feature.image} alt="" height={500} />

                <Details>
                  <strong>{feature.title}</strong>

                  <span>{feature.description}</span>

                  <Button title={feature.titleButton} />
                </Details>
              </Feature>
            </SliderItem>
          ))}

          <ArrowButton style={{ right: 0 }} onClick={handleNextPage}>
            <CaretRight size={28} color={theme['gray-600']} />
          </ArrowButton>
        </Slider>
      </div>
    </FeaturesContainer>
  )
}
