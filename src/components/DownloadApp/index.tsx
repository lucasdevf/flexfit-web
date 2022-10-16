/* NEXT */
import Link from 'next/link'
import Image from 'next/future/image'

/* STYLES */
import { DownloadAppContainer, Links } from './styles'

/* ASSETS */
import DownloadGooglePlay from '../../assets/download-google-play.svg'
import DownloadAppleStore from '../../assets/download-apple-store.svg'
import { Heading } from '../Heading'

export function DownloadApp() {
  return (
    <DownloadAppContainer>
      <Links>
        <Link href="/">
          <Image src={DownloadGooglePlay} alt="" />
        </Link>

        <Link href="/">
          <Image src={DownloadAppleStore} alt="" />
        </Link>
      </Links>

      <Heading
        title="Baixe o nosso app"
        subtitle="Nosso app está disponível na Google Play e também 
        na Apple Store. Caso você deseje, também é possível 
        acessar todas as funcionalidades aqui pelo nosso site"
        centerTitle
      />
    </DownloadAppContainer>
  )
}
