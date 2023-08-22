import { TranslateProvidor } from '../context/translate-api';
import Layout from '../components/Layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TranslateProvidor>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TranslateProvidor>
  );

}

export default MyApp;
