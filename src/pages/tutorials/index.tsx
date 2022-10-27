import { Browsers } from 'phosphor-react'
import { useState } from 'react'
import { Filters } from '../../components/Filters'
import { Heading } from '../../components/Heading'
import { AppLayout } from '../../layouts/AppLayout'
import {
  TutorialsContainer,
  FiltersContainer,
  Exercises,
  ImageContainer,
  Exercise,
  Content,
} from '../../styles/pages/tutorials'

import WomanGymImg from '../../assets/woman-gym.jpg'
import PuxadaFrenteImg from '../../assets/puxada-frente.jpg'
import RemadaBaixaImg from '../../assets/remada-baixa.jpg'
import LevantamentoTerraImg from '../../assets/levantamento-terra.jpg'
import RoscaScottImg from '../../assets/rosca-scott.jpg'
import RoscaMarteloImg from '../../assets/rosca-martelo.jpg'

import Image from 'next/future/image'
import { Button } from '../../components/Button'
import Head from 'next/head'

export default function Tutorials() {
  const filters = ['Dorsal', 'Bíceps', 'Tríceps']

  const [filterActive, setFilterActive] = useState('Dorsal')

  const exercises = [
    {
      name: 'Puxada frontal',
      image: PuxadaFrenteImg,
      muscle: 'dorsal',
    },
    {
      name: 'Remada baixa',
      image: RemadaBaixaImg,
      muscle: 'dorsal',
    },
    {
      name: 'Levantamento terra',
      image: LevantamentoTerraImg,
      muscle: 'dorsal',
    },
    {
      name: 'Rosca scott',
      image: RoscaScottImg,
      muscle: 'bíceps',
    },
    {
      name: 'Martelo',
      image: RoscaMarteloImg,
      muscle: 'bíceps',
    },
    {
      name: 'Rosca concentrada',
      image: WomanGymImg,
      muscle: 'bíceps',
    },
  ]

  return (
    <AppLayout>
      <Head>
        <title>Tutoriais | FlexFit</title>
      </Head>

      <TutorialsContainer>
        <Heading
          icon={<Browsers />}
          title="Tutoriais"
          subtitle="Retire dúvidas sobre dezenas de exercícios"
        />

        <FiltersContainer>
          <p>Qual músculo você deseja ver exercícios?</p>

          <Filters
            filters={filters}
            filterActive={filterActive}
            onFilter={(filter) => setFilterActive(filter)}
          />
        </FiltersContainer>

        <Exercises>
          {exercises
            .filter(
              (exercise) => exercise.muscle === filterActive.toLowerCase(),
            )
            .map((exercise) => (
              <Exercise key={exercise.name}>
                <ImageContainer>
                  <Image src={exercise.image} alt="" height={240} />
                </ImageContainer>

                <Content>
                  <strong>{exercise.name}</strong>

                  <Button title="Ver detalhes" variant="secondary" />
                </Content>
              </Exercise>
            ))}
        </Exercises>
      </TutorialsContainer>
    </AppLayout>
  )
}
