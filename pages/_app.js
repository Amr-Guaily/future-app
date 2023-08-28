import { TranslateProvidor } from '../context/translate-api';
import Layout from '../components/Layout/Layout';
import AOSWrapper from '../components/AOSWrapper';

import 'aos/dist/aos.css';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    router.events.on('routeChangeComplete', scrollToTop);

    return () => router.events.off('hashChangeComplete', scrollToTop);
  }, [router]);

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
