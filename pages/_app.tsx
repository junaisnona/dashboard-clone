import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ComponentWrapper from '../components/Wrapper/ComponentWrapper'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
    <ComponentWrapper>
      <Component {...pageProps} />
    </ComponentWrapper>
    <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
