import { TranslateProvidor } from '../context/translate-api';
import Layout from '../components/Layout/Layout';
import AOSWrapper from '../components/AOSWrapper';

import 'aos/dist/aos.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TranslateProvidor>
      <Layout>
        <AOSWrapper>
          <Component {...pageProps} />
        </AOSWrapper>
      </Layout>
    </TranslateProvidor>
  );

}

export default MyApp;
