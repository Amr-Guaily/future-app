import Link from 'next/link';
import Image from 'next/image';
import { useTranslate } from '../../context/translate-api';

import AOSWrapper from '../AOSWrapper';

const Landing = () => {
  const t = useTranslate();

  console.log('Landing [Re-rendered]');
  return (
    <div className="hero-banner relative">
      <div className="absolute w-full h-full flex justify-center items-center bg-black/40 text-white">
        <AOSWrapper>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col items-center justify-center"
          >
            <h5 className="hero-text">{t.landing.h1}</h5>
            <h1 className="w-[80%] max-w-[720px] tracking-wide sm:leading-10 lg:leading-[4rem] text-center text-xl sm:text-3xl lg:text-5xl font-bold sm:my-4">
              {t.landing.h2}
              <span className="text-2xl sm:text-5xl text-secondary mx-1">
                {t.companyName}
              </span>
            </h1>
            <Link href="#" className="main-btn">
              {t.readMore}
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
