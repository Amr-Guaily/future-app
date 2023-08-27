import Link from 'next/link';
import Image from 'next/image';

import { BsLightningFill } from 'react-icons/bs';

const AboutUs = () => {
  console.log('About-us [Re-render]');
  return (
    <div className="s-block flex flex-col-reverse md:flex-row gap-6 lg:gap-10">
      <div className="flex flex-col md:w-[55%] px-3">
        <span className="text-secondary font-bold text-lg lg:text-xl">
          About us
        </span>
        <h3 className="text-primary text-2xl lg:text-4xl font-bold mt-3">
          Bringing light to your home, one wire at a time.
        </h3>
        <p className="text-slate-700 mt-4 tracking-wider text-sm">
          Void gathering midst together you're shall. Beast set he likeness
          spirit winged two all fourth they're gathered seasons very may heaven
          saying.
        </p>
        <ul className="my-5">
          <li className="feature-li">
            <BsLightningFill size={18} className="light-icon" /> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="feature-li">
            <BsLightningFill size={18} className="light-icon" /> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="feature-li">
            <BsLightningFill size={18} className="light-icon" /> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <div className="hidden lg:flex flex-row items-center gap-8 mt-4 mb-8">
          <div className="flex gap-3">
            <Image
              src="/assets/svg/our-team.png"
              width={60}
              height={30}
              alt="svg-icon"
              className="shrink-0 object-contain"
            />
            <div>
              <span className="text-secondary text-lg font-bold">
                Professional Team
              </span>
              <p className="text-slate-700 mt-1 tracking-wider text-sm p-3-line">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Image
              src="/assets/svg/quick-response.png"
              width={60}
              height={30}
              alt="svg-icon"
              className="shrink-0 object-contain"
            />
            <div>
              <span className="text-secondary text-lg font-bold">
                Professional Team
              </span>
              <p className="text-slate-700 mt-1 tracking-wider text-sm p-3-line">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/about"
          className="main-btn w-fit border-[2px] !py-1.5 !px-6 !mt-0 border-secondary"
        >
          learn more
        </Link>
      </div>

      <Image
        src="/assets/about-1.jpg"
        width={520}
        height={400}
        alt="about-us-image"
        className="rounded flex-1 max-h-[560px] self-center lg:max-h-none object-cover"
      />
    </div>
  );
};

export default AboutUs;
