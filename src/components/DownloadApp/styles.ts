import styled from 'styled-components'

export const DownloadAppContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5rem;

  border-top: 1px solid ${({ theme }) => theme['gray-200']};
  border-bottom: 1px solid ${({ theme }) => theme['gray-200']};

  max-width: 1344px;
  margin: 0 auto;

  padding: 3rem 0;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
