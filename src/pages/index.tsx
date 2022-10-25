/* NEXT */
import Head from 'next/head'
import Image from 'next/future/image'

/* COMPONENTS */
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'
import { DownloadApp } from '../components/DownloadApp'
import { Features } from '../components/Features'

/* STYLES */
import {
  Main,
  Content,
  Brand,
  ButtonExperiment,
} from '../styles/pages/landing-page'

/* ASSETS */
import LineGradient from '../assets/line-gradient.svg'
import MenAndWoman from '../assets/men-and-woman.svg'
import { Recommendations } from '../components/Recommendations'
import { Experiment } from '../components/Experiment'
import { Doubts } from '../components/Doubts'
import { Footer } from '../components/Footer'

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

        <Image src={MenAndWoman} alt="" width={340} />
      </Main>

      <DownloadApp />
      <Features />
      <Recommendations />
      <Experiment />
      <Doubts />

      <Footer />
    </div>
  )
}
