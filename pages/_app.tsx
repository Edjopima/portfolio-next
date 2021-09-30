import { AppProps } from 'next/app'
import Head  from 'next/head'
import Layout from '../components/Layout'
import { AnimatePresence } from "framer-motion";
import '../global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Eduardo Piña</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp