import React from 'react';
import Link from 'next/link';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';

import { useTranslate } from '../../context/translate-api';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SelectLanguage2 from './SelectLanguage2';

const Sidebar = ({ setIsActive }) => {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);
  const t = useTranslate();
  const { asPath } = useRouter();

  console.log('SIDEBAR [Re-rendered..]');
  return (
    <>
      <AiOutlineCloseCircle
        size={26}
        className="text-slate-800 cursor-pointer mt-4 mb-6 mr-6 ml-auto hover:text-red-500 transition-all duration-200"
        onClick={setIsActive}
      />

      {/* Nav-links */}
      <div className="flex flex-col font-semibold text-lg">
        <Link
          href="/"
          className={asPath == '/' ? 'active-link-sidebar' : 'nav-link-sidebar'}
        >
          {t.home}
        </Link>
        <Link
          href="/about"
          className={
            asPath == '/about' ? 'active-link-sidebar' : 'nav-link-sidebar'
          }
        >
          {t.about}
        </Link>
        <div className="has-submenu-sidebar cursor-pointer relative">
          <div
            className="flex justify-between items-center mb-2.5"
            onClick={() => setIsActiveSubmenu(!isActiveSubmenu)}
          >
            {t.services}
            <FaAngleDown
              className={`${isActiveSubmenu && 'rotate-180'} inline-block`}
            />
          </div>
          {isActiveSubmenu && (
            <div className="sub-menu-sidebar">
              <Link
                href="/about"
                className={
                  asPath == '/about'
                    ? 'active-link-sidebar'
                    : 'nav-link-sidebar'
                }
              >
                {t.about}
              </Link>
              <Link
                href="/about"
                className={
                  asPath == '/about'
                    ? 'active-link-sidebar'
                    : 'nav-link-sidebar'
                }
              >
                {t.about}
              </Link>
              <Link
                href="/about"
                className={
                  asPath == '/about'
                    ? 'active-link-sidebar'
                    : 'nav-link-sidebar'
                }
              >
                {t.about}
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/contacts"
          className={
            asPath == '/contacts' ? 'active-link-sidebar' : 'nav-link-sidebar'
          }
        >
          {t.contact}
        </Link>
      </div>

      {/* Select Language */}
      <SelectLanguage2 />
    </>
  );
};

export default React.memo(Sidebar);
