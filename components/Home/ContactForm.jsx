import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

import emailjs from '@emailjs/browser';
import AOSWrapper from '../AOSWrapper';

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    value: '',
    type: '',
  });

  useEffect(() => {
    if (!message.value) return;

    const timeOutID = setTimeout(() => {
      setMessage({ value: '', type: '' });
    }, 3000);

    return () => clearTimeout(timeOutID);
  }, [message.value]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_xtxetum',
        'template_yq17r79',
        form.current,
        '_HT2b6DiyP5GDkWbk'
      )
      .then(
        () => {
          setMessage({
            value: "Thanks, We'll response to you as soon as possible",
            type: 'success',
          });
          setIsLoading(false);
          form.current[0].value = '';
          form.current[1].value = '';
          form.current[2].value = '';
          form.current[3].value = '-- Project Type --';
          form.current[4].value = '';
        },
        () => {
          setIsLoading(false);
          setMessage({
            value: 'Something went rong, please tray again later...',
            type: 'error',
          });
        }
      );
  };

  console.log('FORM [Rerendered]');

  return (
    <AOSWrapper>
      <div data-aos="fade-left" className="md:w-1/2">
        <div className="flex items-center gap-3">
          <div className="bg-secondary py-0.5 pl-0.5">
            <Image
              src="/assets/svg/contact-us.png"
              width={40}
              height={30}
              alt="svg-icon"
              className="shrink-0 object-contain"
            />
          </div>
          <span className="font-bold text-lg text-slate-900 leading-5">
            Write us a few words about your project.
          </span>
        </div>

        <form className="contact-form" ref={form} onSubmit={submitHandler}>
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            required
            maxLength={30}
            name="name"
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            required
            name="email"
          />
          <input
            className="input-field"
            type="tel"
            placeholder="Your Phone"
            name="phone"
          />

          <select className="input-field" name="project_type">
            <option selected disabled hidden>
              -- Project Type --
            </option>
            <option value="Electrical Maintenance">
              Electrical Maintenance
            </option>
            <option value="Electrical Repair">Electrical Repair</option>
            <option value="Electrical Installation">
              Electrical Installation
            </option>
          </select>

          <textarea
            className="input-field"
            type="text"
            rows={6}
            required
            name="message"
            placeholder="Write your message here"
          />
          <button
            disabled={isLoading}
            className={`${
              isLoading && 'hover:!bg-secondary opacity-80 hover:!text-white'
            } submit-btn main-btn`}
          >
            {isLoading && (
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <span className="block mb-0.5"> Send a Message</span>
          </button>

          {message.value && (
            <div
              className={`${
                message.type == 'success' ? 'text-green-600' : 'text-red-500'
              } absolute bottom-0 start-0 font-semibold text-base transition-all duration-1000`}
            >
              {message.value}
            </div>
          )}
        </form>
      </div>
    </AOSWrapper>
  );
};

export default ContactForm;
