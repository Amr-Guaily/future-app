import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Image
        src="/assets/logo-2.jpg"
        alt="Logo"
        priority={true}
        width={120}
        height={40}
        style={{
          maxWidth: '150px',
          width: '100%',
          height: 'auto',
        }}
      />
    </Link>
  );
};

export default Logo;
