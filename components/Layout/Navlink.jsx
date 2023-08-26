import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navlink = ({ children, href, activeClass, normalClass }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} className={asPath == href ? activeClass : normalClass}>
      {children}
    </Link>
  );
};

export default Navlink;
