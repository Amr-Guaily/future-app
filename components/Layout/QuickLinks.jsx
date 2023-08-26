import Link from 'next/link';
import { FaAngleDoubleRight } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <div className="sm:px-6 md:px-10">
      <h3 className="footer-title">Quick Links</h3>
      <div className="flex flex-col gap-2">
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> Service_1
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> Service_1
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> Service_1
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> Terms & Conditions
        </Link>
        <Link href="#" className="quick-link">
          <FaAngleDoubleRight /> QFA
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
