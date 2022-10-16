import styled from 'styled-components'

export const FeaturesContainer = styled.section`
  max-width: 1344px;
  margin: 0 auto;

  padding-top: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`

export const SlideIcon = styled.div`
  position: absolute;
  top: 5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-400']};
`

export const SliderItem = styled.div``

export const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  width: 70rem;
  margin: 0 auto;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1.75rem;
    font-weight: 500;
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-600']};
    line-height: 1.8rem;
    margin-bottom: 2rem;
  }
`

export const ArrowButton = styled.button`
  all: unset;
  position: absolute;
`
