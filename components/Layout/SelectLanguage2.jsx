import React from 'react';
import { useRouter } from 'next/router';
import { MdLanguage } from 'react-icons/md';

const SelectLanguage2 = () => {
  const router = useRouter();
  const { pathname, asPath, locale } = router;

  const changeLanguage = () => {
    router.push(pathname, asPath, { locale: locale === 'en' ? 'ar' : 'en' });
  };

  console.log('SIDEBAR-2 [Re-rendered..]');
  return (
    <div
      className="mt-8 mb-5 flex rtl:flex-row-reverse justify-center items-start gap-2 cursor-pointer text-gray-500"
      onClick={changeLanguage}
    >
      <MdLanguage size={26} />
      <span className="font-semibold font-cairo">
        {locale === 'en' ? 'العربيـة' : 'English'}
      </span>
    </div>
  );
};

export default React.memo(SelectLanguage2);
