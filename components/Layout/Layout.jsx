import { useCallback, useState } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import StickySocial from './StickySocial';

const Layout = ({ children }) => {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);

  const activeSidebarHanlder = useCallback(() => {
    setIsActiveSidebar((prevState) => !prevState);
  }, []);

  console.log('Layout [Re-rendered..]');
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar activeSidebar={activeSidebarHanlder} />

      <StickySocial />

      <div
        className={`${
          isActiveSidebar && '!opacity-100 !pointer-events-auto'
        } overlay`}
        onClick={activeSidebarHanlder}
      ></div>
      <div
        className={`${isActiveSidebar && 'ltr:!right-0 rtl:!left-0'} sidebar`}
      >
        <Sidebar setIsActive={activeSidebarHanlder} />
      </div>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
