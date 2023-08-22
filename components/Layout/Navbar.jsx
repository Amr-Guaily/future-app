import Link from 'next/link';
import { useTranslate } from '../../context/translate-api';
import SelectLanguage from './SelectLanguage';

const Navbar = () => {
  const t = useTranslate();

  console.log('NAVBAR [Re-rendered..]');
  return (
    <nav className="flex items-center bg-primary">
      <ul className="flex gap-5">
        <Link href="/" passHref>
          <li>{t.home}</li>
        </Link>
        <Link href="/about" passHref>
          <li>{t.about}</li>
        </Link>
        <li>{t.contact}</li>
      </ul>
      <SelectLanguage />
    </nav>
  );
};

export default Navbar;
