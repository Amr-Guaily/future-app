import Image from 'next/image';
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="container py-10 flex items-center gap-6 rtl:flex-row-reverse">
        <Image
          src="/assets/statistics.png"
          alt="statistics-section"
          width={400}
          height={360}
          className="flex-1 hidden sm:block max-h-[520px] self-center object-contain"
        />

        <div className="sm:w-[60%] lg:w-1/2 p-3">
          <h3 className="text-xl xl:text-3xl xl:leading-[2.5rem] font-bold text-primary tracking-wider mb-7">
            PROVIDING HIGH QUALITY SERVICE.
          </h3>
          <p className="max-w-[620px] my-6 xl:my-10 text-slate-700 mt-3 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis.
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
      </div>
    </div>
  );
};

export default Statistics;
