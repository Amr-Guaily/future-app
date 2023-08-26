import { useState } from 'react';

const NewsLetter = () => {
  const [formData, setFormData] = useState('');

  const submitHandlar = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:col-span-4 lg:col-span-1 sm:px-6 md:px-0">
      <h3 className="footer-title">Subscribe for Newslatter</h3>
      <form onSubmit={(e) => submitHandlar(e)}>
        <input
          type="email"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Your Email"
          className="py-2 px-4 mb-2 block max-w-[380px] outline-none border-none rounded-md w-full text-slate-800"
        />

        <button className="main-btn !my-0 !py-2">Subscribe Now</button>
      </form>
    </div>
  );
};

export default NewsLetter;
