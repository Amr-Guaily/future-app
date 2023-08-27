import Link from 'next/link';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="hero-banner relative">
      <div className="absolute w-full h-full bg-black/40 flex flex-col justify-center items-center text-white">
        <h5 className="hero-text">FUTURE CONSTRUCTION</h5>
        <h1 className="w-[80%] max-w-[600px] tracking-wider sm:leading-10 lg:leading-[4rem] text-center text-xl sm:text-3xl lg:text-5xl font-bold sm:my-4">
          Make your dream home with{' '}
          <span className="text-3xl sm:text-6xl text-secondary">FUTURE</span>{' '}
        </h1>
        <Link href="#" className="main-btn">
          View Properties
        </Link>
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
