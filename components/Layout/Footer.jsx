import React from 'react';
import Link from 'next/link';
import { useTranslate } from '../../context/translate-api';
import socialLinks from '../../utils/socialLinks';

import Logo from './Logo';
import UpButton from './UpButton';
import QuickLinks from './QuickLinks';
import NewsLetter from './NewsLetter';

const Footer = () => {
  const t = useTranslate();

  console.log('Footer [Re-rendered..]');
  return (
    <footer className="mt-[2rem] md:mt-[4rem]">
      <UpButton />

      <div className="bg-[#202e31] text-white py-12">
        <div className="container px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-sm mt-3 tracking-wider">
              Heaven fruitful doesn't over lesser days appear creeping seasons
              so behold bearing days open.
            </p>
          </div>

          <QuickLinks />

          <div className="lg:-ms-8 lg:pe-8">
            <h3 className="footer-title">GET IN TOUCH</h3>
            <p className="text-sm mt-3 text-justify">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.prefix + item.link}
                  className="social-links-footer"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <NewsLetter />
        </div>
      </div>

      <p className="text-white font-semibold text-sm px-2 bg-black/90 py-2 lg:whitespace-nowrap text-center">
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

export default React.memo(Footer);
