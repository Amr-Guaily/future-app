import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslate } from '../../context/translate-api';

import { FaAngleDown } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import SelectLanguage from './SelectLanguage';
import Navlink from './Navlink';
import Logo from './Logo';

const Navbar = ({ activeSidebar }) => {
  const [isSticky, setIsSticky] = useState(false);
  const t = useTranslate();

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
        <Logo />

        {/* Nav-links */}
        <div className="hidden flex-1 md:flex gap-6 justify-center items-center font-semibold text-lg">
          <Navlink href="/" activeClass="active-link" normalClass="nav-link">
            {t.home}
          </Navlink>

          <Navlink
            href="/about"
            activeClass="active-link"
            normalClass="nav-link"
          >
            {t.about}
          </Navlink>

          <div className="has-submenu cursor-pointer relative py-2.5">
            {t.services} <FaAngleDown className=" inline-block" />
            <div className="sub-menu">
              <Navlink
                href="/about"
                activeClass="active-link"
                normalClass="nav-link"
              >
                {t.about}
              </Navlink>
              <Navlink
                href="/about"
                activeClass="active-link"
                normalClass="nav-link"
              >
                {t.about}
              </Navlink>
              <Navlink
                href="/about"
                activeClass="active-link"
                normalClass="nav-link"
              >
                {t.about}
              </Navlink>
            </div>
          </div>
          <Navlink
            href="/contacts"
            activeClass="active-link"
            normalClass="nav-link"
          >
            {t.contact}
          </Navlink>
        </div>

        {/* Select Language */}
        <SelectLanguage />

        <FiMenu
          size={30}
          className="md:hidden cursor-pointer"
          onClick={activeSidebar}
        />
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
