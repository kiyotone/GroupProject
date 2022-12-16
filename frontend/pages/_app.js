import '../styles/globals.css'
import Layout from '../components/Layout'
import '../styles/signin.css'
import '../components/axios'
import { ProvideCurrentState } from '../components/CurrentState'

function MyApp({ Component, pageProps }) {
  // if (Component.getLayout){
  //   return Component.getLayout(   <ProvideCurrentState><Component {...pageProps} /> </ProvideCurrentState>  )
  // }
  return (
    <ProvideCurrentState>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </ProvideCurrentState>
  )
}

export default MyApp
