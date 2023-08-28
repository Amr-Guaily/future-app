import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease',
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
