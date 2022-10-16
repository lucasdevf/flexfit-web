/* NEXT */
import Head from 'next/head'
import Image from 'next/future/image'

/* COMPONENTS */
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'

/* STYLES */
import { Main, Content, Brand, ButtonExperiment } from '../styles/pages/home'

/* ASSETS */
import LineGradient from '../assets/line-gradient.svg'
import MenAndWoman from '../assets/men-and-woman.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | FlexFit</title>
      </Head>

      <Header />

      <Main>
        <Content>
          <Brand>
            <p>
              Flex<span>Fit</span>
            </p>

            <Image src={LineGradient} alt="" />
          </Brand>

          <Heading
            title="O app para quem quer ter resultado"
            subtitle="Controle seus treinos e suas dietas, defina metas e acompanhe todos os seus resultados em um único app"
          />

          <ButtonExperiment title="Quero experimentar" variant="secondary" />
        </Content>

        <Image src={MenAndWoman} alt="" />
      </Main>
    </div>
  )
}
