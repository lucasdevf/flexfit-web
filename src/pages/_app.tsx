import type { AppProps } from 'next/app'

/* STYLES */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'

import { GlobalStyles } from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
