import "../styles/globals.css";
import Layout from "../components/Layout";
import "../styles/signin.css";
import "../components/axios";
import { ProvideCurrentState } from "../components/CurrentState";
import '@fontsource/roboto';
import {store} from '../components/redux/store'
import { Provider } from "react-redux";

/*
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ProvideCurrentState>
        
        <Provider store={store}>
          <Component {...pageProps} />{" "}
        </Provider>
      </ProvideCurrentState>
    );
  }
  return (
    <ProvideCurrentState>
      
      <Provider store={store}>
      <Layout>
        
          <Component {...pageProps} />{" "}
        
      </Layout>
      </Provider>
    </ProvideCurrentState>
  );
}*/

function MyApp({ Component, pageProps}) {
  if (Coomponent.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
