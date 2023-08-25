import UpButton from './UpButton';
import Link from 'next/link';
import { useTranslate } from '../../context/translate-api';

const Footer = () => {
  const t = useTranslate();
  return (
    <footer>
      <UpButton />
      <div></div>
      <p className="text-white text-sm px-2 bg-black/90 py-2 lg:whitespace-nowrap text-center">
        {t.copyRight}
        <Link
          href="https://valinteca.com/"
          target="_blank"
          rel="noreferrer"
          className="text-base xl:text-lg font-semibold text-secondary underline mx-2"
        >
          {t.development}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
