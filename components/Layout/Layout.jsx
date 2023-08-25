import { useCallback, useState } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import StickySocial from './StickySocial';

const Layout = ({ children }) => {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);

  const activeSidebarHanlder = useCallback(() => {
    setIsActiveSidebar(!isActiveSidebar);
  }, []);

  console.log('Layout [Re-rendered..]');
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar setIsActive={activeSidebarHanlder} />

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

      <main className="flex-1 min-h-[2000px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
