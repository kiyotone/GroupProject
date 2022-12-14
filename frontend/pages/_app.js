import '../styles/globals.css'
import Layout from '../components/Layout'
import '../styles/signin.css'
import '../components/axios'

function MyApp({ Component, pageProps }) {
  // if (Component.getLayout){
  //   return Component.getLayout(  <Component {...pageProps} />   )
  // }
  return (
  <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
