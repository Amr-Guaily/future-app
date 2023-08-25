import Link from 'next/link';
import Image from "next/legacy/image";
import { useTranslate } from '../../context/translate-api';
import { useRouter } from 'next/router';

import SelectLanguage from './SelectLanguage';
import { FaAngleDown } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Navbar = ({ setIsActive }) => {
  const [isSticky, setIsSticky] = useState(false);
  const t = useTranslate();
  const { asPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('NAVBAR [Re-rendered..]');
  return (
    <nav
      className={`${isSticky && 'sticky-nav'} bg-primary text-white z-[999]`}
    >
      <div className="container flex items-center justify-between gap-6 py-3">
        {/* Logo */}
        <Link href="/" passHref>
          <Image src="/assets/logo-2.jpg" alt="Logo" width={120} height={40} />
        </Link>

        {/* Nav-links */}
        <div className="hidden flex-1 md:flex gap-6 justify-center items-center font-semibold text-lg">
          <Link href="/" className={asPath == '/' ? 'active-link' : 'nav-link'}>
            {t.home}
          </Link>
          <Link
            href="/about"
            className={asPath == '/about' ? 'active-link' : 'nav-link'}
          >
            {t.about}
          </Link>
          <div className="has-submenu cursor-pointer relative py-2.5">
            {t.services} <FaAngleDown className=" inline-block" />
            <div className="sub-menu">
              <Link
                href="/about"
                className={asPath == '/about' ? 'active-link' : 'nav-link'}
              >
                {t.about}hknfss
              </Link>
              <Link
                href="/about"
                className={asPath == '/about' ? 'active-link' : 'nav-link'}
              >
                {t.about}
              </Link>
              <Link
                href="/about"
                className={asPath == '/about' ? 'active-link' : 'nav-link'}
              >
                {t.about}
              </Link>
            </div>
          </div>
          <Link
            href="/contacts"
            className={asPath == '/contacts' ? 'active-link' : 'nav-link'}
          >
            {t.contact}
          </Link>
        </div>

        {/* Select Language */}
        <div className="hidden md:block">
          <SelectLanguage />
        </div>

        <FiMenu
          size={30}
          className="md:hidden cursor-pointer"
          onClick={setIsActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
