import type { AppProps } from 'next/app'

/* REQUESTS */
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

/* STYLES */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'
import { GlobalStyles } from '../styles/global'
import { AuthContextProvider } from '../contexts/AuthContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </QueryClientProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
