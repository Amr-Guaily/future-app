import React from 'react';
import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const router = useRouter();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={router.locale}
      className="select-lang"
    >
      <option className="text-black" value="en">
        EN
      </option>
      <option className="text-black" value="ar">
        AR
      </option>
    </select>
  );
};

export default React.memo(SelectLanguage);
