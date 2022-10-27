import type { AppProps } from 'next/app'

/* REQUESTS */
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

/* STYLES */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'
import { GlobalStyles } from '../styles/global'
import { AuthContextProvider } from '../contexts/AuthContext'
import { StepsCreateTrainingContextProvider } from '../contexts/StepsCreateTrainingContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <AuthContextProvider>
          <StepsCreateTrainingContextProvider>
            <Component {...pageProps} />
          </StepsCreateTrainingContextProvider>
        </AuthContextProvider>

        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
