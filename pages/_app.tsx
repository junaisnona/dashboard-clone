import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ComponentWrapper from '../components/Wrapper/ComponentWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComponentWrapper>
      <Component {...pageProps} />
    </ComponentWrapper>
  )
}

export default MyApp
