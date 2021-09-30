import { AppProps } from 'next/app'
import Head  from 'next/head'
import Layout from '../components/Layout'
import '../global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Eduardo Piña</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp