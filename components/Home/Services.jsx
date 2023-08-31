import { useTranslate } from '../../context/translate-api';
import Image from 'next/image';

import AOSWrapper from '../AOSWrapper';

const Services = () => {
  const t = useTranslate();
  return (
    <div className="s-block !max-w-none py-10 bg-gray-100">
      <div className="text-center">
        <span className="sub-title">{t.services.title}</span>
        <p className="text-2xl md:text-3xl font-bold text-slate-700 my-1">
          Power up your life with our electrical services!
        </p>
      </div>

      <div className="container !px-0 flex flex-col md:flex-row gap-4 lg:gap-6 mt-5 sm:mt-10">
        <AOSWrapper>
          <div
            data-aos={`fade-${t.direction == 'ltr' ? 'right' : 'left'}`}
            className="service-item lg:mt-[2.5rem]"
          >
            <Image
              src="/assets/svg/service-1.png"
              height={60}
              width={60}
              className="object-contain"
            />
            <h4>New Builds Electrical Contractors</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores quia beatae! Labore ducimus ratione quia praesentium
              harum, facilis distinctio.
            </p>
          </div>
        </AOSWrapper>

        <AOSWrapper>
          <div data-aos="fade-up" className="service-item lg:h-fit">
            <Image
              src="/assets/svg/service-2.png"
              height={60}
              width={60}
              className="object-contain"
            />
            <h4>New Builds Electrical Contractors</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores quia beatae! Labore ducimus ratione quia praesentium
              harum, facilis distinctio.
            </p>
          </div>
        </AOSWrapper>

        <AOSWrapper>
          <div
            data-aos={`fade-${t.direction == 'ltr' ? 'left' : 'right'}`}
            className="service-item lg:mt-[2.5rem]"
          >
            <Image
              src="/assets/svg/service-3.png"
              height={60}
              width={60}
              className="object-contain"
            />
            <h4>New Builds Electrical Contractors</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores quia beatae! Labore ducimus ratione quia praesentium.
            </p>
          </div>
        </AOSWrapper>
      </div>
    </div>
  );
};

export default Services;
