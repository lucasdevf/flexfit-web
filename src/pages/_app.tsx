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
import { CreateTrainingContextProvider } from '../contexts/CreateTrainingContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <AuthContextProvider>
          <CreateTrainingContextProvider>
            <StepsCreateTrainingContextProvider>
              <Component {...pageProps} />
            </StepsCreateTrainingContextProvider>
          </CreateTrainingContextProvider>
        </AuthContextProvider>

        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
