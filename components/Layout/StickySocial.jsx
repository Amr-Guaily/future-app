import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

const socials = [
  {
    icon: <MdEmail size={18} />,
    tooltip: 'Send us',
    prefix: 'mailto:',
    link: 'valinteca@outlook.com',
    color: '#d17030',
  },
  {
    icon: <FaWhatsapp size={18} />,
    tooltip: "What's App",
    prefix: '',
    link: 'http://wa.me/+971508403823',
    color: '#4cd140',
  },
  {
    icon: <FaLinkedinIn size={18} />,
    tooltip: 'LinkedIn',
    prefix: '',
    link: '#',
    color: '#4665a3',
  },
  {
    icon: <FaTwitter size={18} />,
    tooltip: 'Send us',
    prefix: 'mailto:',
    link: '#',
    color: '#0097ce',
  },
];

const StickySocial = () => {
  console.log('STICY [Re-rendered..]');
  return (
    <div className="sticky-social">
      {socials.map((item, idx) => (
        <Link
          key={idx}
          href={item.prefix + item.link}
          style={{ '--hover-bg-color': item.color }}
          className="social-item"
          data-tooltip={item.tooltip}
          passHref
          target="_blank"
          rel="noreferrer"
        >
          <div>{item.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default React.memo(StickySocial);
