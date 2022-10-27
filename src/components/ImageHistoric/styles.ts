import styled from 'styled-components'
import ImageNext from 'next/future/image'

export const ImageHistoricContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    footer {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    background: red;
    padding: 1rem;
    width: 100%;

    background: linear-gradient(to top, #000, transparent);
    opacity: 0;
    transition: all 0.2s ease-in-out;
    transform: translateY(1110%);
  }
`

export const Image = styled(ImageNext)`
  object-fit: cover;
`

export const Button = styled.button`
  all: unset;
  cursor: pointer;
`
