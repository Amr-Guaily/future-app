import Image from 'next/image';
import { useTranslate } from '../../context/translate-api';

import CountUp from 'react-countup';
import AOSWrapper from '../AOSWrapper';

const Statistics = () => {
  const t = useTranslate();
  return (
    <div className="statistics">
      <div className="container py-10 flex items-center gap-6 rtl:flex-row-reverse">
        <AOSWrapper>
          <Image
            data-aos="fade-up"
            src="/assets/statistics.png"
            alt="statistics-section"
            width={400}
            height={360}
            className="flex-1 hidden sm:block max-h-[520px] self-center object-contain"
          />
        </AOSWrapper>

        <AOSWrapper>
          <div data-aos="fade-left" className="sm:w-[60%] lg:w-1/2 p-3">
            <h3 className="text-xl xl:text-3xl xl:leading-[2.5rem] font-bold text-primary tracking-wide mb-7">
              {t.statistics.h1}
            </h3>
            <p className="max-w-[620px] my-6 xl:my-10 text-slate-700 mt-3 tracking-wide">
              {t.statistics.h2}
            </p>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="statistics-item">
                <span>
                  <CountUp end={15} enableScrollSpy />
                  K+
                </span>
                <p>Happy Customer</p>
              </div>
              <div className="statistics-item">
                <span>
                  <CountUp end={10} enableScrollSpy />
                  K+
                </span>
                <p>Project Done</p>
              </div>
              <div className="statistics-item">
                <span>
                  <CountUp end={9} enableScrollSpy />
                  /10
                </span>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
};

export default Statistics;
