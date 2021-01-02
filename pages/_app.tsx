import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import '../styles/global.css'
import { pageview } from '../lib/gtag'

const isProduction = process.env.NODE_ENV === 'production'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isProduction) pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
