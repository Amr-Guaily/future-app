import Link from 'next/link';
import React from 'react';

import socialLinks from '../../utils/socialLinks';

const StickySocial = () => {
  console.log('STICY [Re-rendered..]');
  return (
    <div className="sticky-social">
      {socialLinks.map((item, idx) => (
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
