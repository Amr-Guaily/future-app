import { useState } from 'react';
import { useTranslate } from '../../context/translate-api';

const NewsLetter = () => {
  const t = useTranslate();
  const [formData, setFormData] = useState('');

  const submitHandlar = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:col-span-4 lg:col-span-1 sm:px-6 md:px-0">
      <h3 className="footer-title">{t.footer.newsLetter}</h3>
      <form onSubmit={(e) => submitHandlar(e)}>
        <input
          type="email"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          placeholder={t.contactUs.formEmail}
          className="py-2 px-4 mb-2 block max-w-[380px] outline-none border-none rounded-md w-full text-slate-800"
        />

        <button className="main-btn !my-0 !py-2">{t.footer.subscribe}</button>
      </form>
    </div>
  );
};

export default NewsLetter;
