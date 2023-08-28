import React from 'react';
import { useState } from 'react';
import { useTranslate } from '../../context/translate-api';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import SelectLanguage2 from './SelectLanguage2';
import Navlink from './Navlink';

const Sidebar = ({ setIsActive }) => {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);
  const t = useTranslate();

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
        <Navlink
          href="/"
          activeClass="active-link-sidebar"
          normalClass="nav-link-sidebar"
        >
          {t.home}
        </Navlink>
        <Navlink
          href="/about"
          activeClass="active-link-sidebar"
          normalClass="nav-link-sidebar"
        >
          {t.about}
        </Navlink>
        <div className="has-submenu-sidebar cursor-pointer relative">
          <div
            className="flex justify-between items-center mb-2.5"
            onClick={() => setIsActiveSubmenu(!isActiveSubmenu)}
          >
            {t.services.title}
            <FaAngleDown
              className={`${isActiveSubmenu && 'rotate-180'} inline-block`}
            />
          </div>
          {isActiveSubmenu && (
            <div className="sub-menu-sidebar">
              <Navlink
                href="#"
                activeClass="active-link-sidebar"
                normalClass="nav-link-sidebar"
              >
                {t.services.service_1}
              </Navlink>
              <Navlink
                href="#"
                activeClass="active-link-sidebar"
                normalClass="nav-link-sidebar"
              >
                {t.services.service_2}
              </Navlink>
              <Navlink
                href="#"
                activeClass="active-link-sidebar"
                normalClass="nav-link-sidebar"
              >
                {t.services.service_3}
              </Navlink>
            </div>
          )}
        </div>
        <Navlink
          href="/contacts"
          activeClass="active-link-sidebar"
          normalClass="nav-link-sidebar"
        >
          {t.contact}
        </Navlink>
      </div>

      {/* Select Language */}
      <SelectLanguage2 />
    </>
  );
};

export default React.memo(Sidebar);
