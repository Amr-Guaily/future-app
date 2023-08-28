import Link from 'next/link';
import Image from 'next/image';

import AOSWrapper from '../AOSWrapper';

const Landing = () => {
  console.log('Landing [Re-rendered]');
  return (
    <div className="hero-banner relative">
      <div className="absolute w-full h-full flex justify-center items-center bg-black/40 text-white">
        <AOSWrapper>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col items-center justify-center"
          >
            <h5 className="hero-text">FUTURE CONSTRUCTION</h5>
            <h1 className="w-[80%] max-w-[600px] tracking-wider sm:leading-10 lg:leading-[4rem] text-center text-xl sm:text-3xl lg:text-5xl font-bold sm:my-4">
              Make your dream home with{' '}
              <span className="text-3xl sm:text-6xl text-secondary">
                FUTURE
              </span>{' '}
            </h1>
            <Link href="#" className="main-btn">
              View Properties
            </Link>
          </div>
        </AOSWrapper>
      </div>
      <Image
        src="/assets/hero-banner.jpg"
        alt="hero-banner"
        className="min-h-[280px] object-cover"
        width={600}
        height={600}
        sizes="100vw"
        priority={true}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default Landing;
