import Image from 'next/image';

const ContactForm = () => {
  return (
    <div className="md:w-1/2">
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

      <form className="contact-form">
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          required
          maxLength={30}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          required
        />
        <input className="input-field" type="tel" placeholder="Your Phone" />

        <select className="input-field">
          <option selected disabled hidden>
            -- Project Type --
          </option>
          <option value="">Electrical Maintenance</option>
          <option value="">Electrical Repair</option>
          <option value="">Electrical Installation</option>
        </select>

        <textarea
          className="input-field"
          type="text"
          rows={6}
          required
          name="message"
          placeholder="Write your message here"
        />
      </form>

      <button className="main-btn !my-0 w-full border-[2px] border-secondary">
        Send a Message
      </button>
    </div>
  );
};

export default ContactForm;
