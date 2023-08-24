import Footer from './Footer';
import Navbar from './Navbar';
import StickySocial from './StickySocial';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col h-[3300px]">
      <Navbar />
      <StickySocial />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
