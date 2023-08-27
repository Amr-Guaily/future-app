import ContactForm from './ContactForm';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const ContactUs = () => {
  return (
    <div className="s-block flex gap-8 md:gap-12 flex-col md:flex-row">
      <div className="md:w-1/2">
        <span className="text-secondary font-bold text-lg lg:text-xl">
          Contact US!
        </span>
        <h3 className="text-primary text-2xl lg:text-4xl font-bold mt-3">
          Power up your life with our electrical expertise!
        </h3>
        <p className="text-slate-700 mt-4 tracking-wider text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <ul className="my-8">
          <li className="contact-li">
            <MdLocationOn size={24} />
            <span>99 Roving St., Big City. PKU</span>
          </li>
          <li className="contact-li">
            <MdEmail size={20} />
            <span>hello@awesomesite.com</span>
          </li>
          <li className="contact-li">
            <BsTelephoneFill size={20} />
            <span>+123-234-1234</span>
          </li>
        </ul>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.347380585809!2d101.48221!3d0.487856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5af55f1ff4c81%3A0xc1ea62dbd56393b9!2sGubug%20Suro%20Bodong!5e0!3m2!1sen!2sus!4v1693134033532!5m2!1sen!2sus"
            style={{ border: 0, width: '100%' }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactUs;