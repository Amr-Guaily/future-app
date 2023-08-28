import Link from 'next/link';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useTranslate } from '../../context/translate-api';

const QuickLinks = () => {
  const t = useTranslate();
  return (
    <div className="sm:px-6 md:px-10">
      <h3 className="footer-title">{t.footer.quickLinks}</h3>
      <div className="flex flex-col gap-2">
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> {t.services.service_1}
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> {t.services.service_1}
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> {t.services.service_1}
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> {t.footer.conditions}
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> {t.footer.faq}
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
