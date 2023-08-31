import Link from 'next/link';
import { useTranslate } from '../../context/translate-api';

const FixedBanner = () => {
  const t = useTranslate();
  return (
    <div className="banner relative my-[2rem] md:my-[4rem]">
      <div className="flex flex-col gap-5 text-center items-center py-[4rem] lg:py-[6rem] px-2.5 sm:px-5">
        <h2 className="text-secondary text-3xl sm:text-4xl font-bold md:max-w-none">
          Powering progress together - Electrifying your world
        </h2>
        <p className="text-white tracking-wide max-w-[740px] lg:max-w-[1100px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          accusamus quibusdam obcaecati est illo labore doloremque reprehenderit
          voluptate tenetur. Molestiae non, quis eum quaerat impedit harum ipsa
          quisquam porro ab.
        </p>
        <Link href="#" className="main-btn w-fit mx-auto">
          {t.contact}
        </Link>
      </div>
    </div>
  );
};

export default FixedBanner;
