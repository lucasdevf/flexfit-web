import { ArrowsOut, Share, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { ImageHistoricContainer, Image, Button } from './styles'

import { ModalAlert } from '../ModalAlert'

export interface ImageHistoryProps {
  image_name: string
}

interface Props {
  data: ImageHistoryProps
}

export function ImageHistoric({ data }: Props) {
  const theme = useTheme()

  return (
    <ImageHistoricContainer className="keen-slider__slide">
      <Image
        src={`http://localhost:3333/uploads/${data.image_name}`}
        alt=""
        height={284}
        width={284}
      />

      <footer>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button>
              <Trash color={theme.white} size={20} />
            </Button>
          </AlertDialog.Trigger>

          <ModalAlert
            title="Excluir imagem"
            description="Deseja realmente excluir essa imagem?"
            onConfirm={() => {}}
            onClose={() => {}}
          />
        </AlertDialog.Root>

        <Button>
          <ArrowsOut color={theme.white} size={20} />
        </Button>

        <Button>
          <Share color={theme.white} size={20} />
        </Button>
      </footer>
    </ImageHistoricContainer>
  )
}
