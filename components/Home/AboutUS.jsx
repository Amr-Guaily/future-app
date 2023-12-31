import Link from 'next/link';
import Image from 'next/image';
import { useTranslate } from '../../context/translate-api';

import { BsLightningFill } from 'react-icons/bs';
import AOSWrapper from '../AOSWrapper';

const AboutUs = () => {
  const t = useTranslate();
  console.log('About-us [Re-render]');
  return (
    <div className="s-block flex flex-col-reverse md:flex-row gap-6 lg:gap-10">
      <AOSWrapper>
        <div data-aos="fade-right" className="flex flex-col md:w-[55%] px-3">
          <span className="sub-title">{t.aboutUS.h1}</span>
          <h3 className="text-primary text-2xl lg:text-4xl font-bold mt-3">
            {t.aboutUS.h2}
          </h3>
          <p className="text-slate-700 mt-4 tracking-wider text-sm">
            {t.aboutUS.h3}
          </p>
          <ul className="my-5">
            <li className="feature-li">
              <BsLightningFill size={18} className="light-icon" />
              {t.features.f1}
            </li>
            <li className="feature-li">
              <BsLightningFill size={18} className="light-icon" />
              {t.features.f2}
            </li>
            <li className="feature-li">
              <BsLightningFill size={18} className="light-icon" />
              {t.features.f3}
            </li>
          </ul>

          <div className="hidden lg:flex flex-row items-center gap-8 mt-4 mb-8">
            <AOSWrapper>
              <div data-aos="zoom-in" className="flex gap-3">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
            </AOSWrapper>

            <AOSWrapper>
              <div data-aos="zoom-in" className="flex gap-3">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
            </AOSWrapper>
          </div>

          <Link
            href="/about"
            className="main-btn w-fit border-[2px] !py-1.5 !px-6 !mt-0 border-secondary"
          >
            {t.readMore}
          </Link>
        </div>
      </AOSWrapper>

      <AOSWrapper>
        <Image
          data-aos="fade-up"
          src="/assets/about-1.jpg"
          width={520}
          height={400}
          alt="about-us-image"
          className="rounded flex-1 max-h-[560px] self-center lg:max-h-none object-cover"
        />
      </AOSWrapper>
    </div>
  );
};

export default AboutUs;
