import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import NavbarPopup from './NavbarPopup';

const Layout = ({ element }: { element: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return isOpen ? (
    <NavbarPopup {...{ setIsOpen, toggleMenu }} />
  ) : (
    <div className="border dark:border-white border-black min-h-[90vh] m-2 sm:m-5 lg:m-10 p-4 sm:p-10 grid grid-cols-5 auto-rows-min">
      <Header />
      <NavbarMobile {...{ setIsOpen, toggleMenu }} />
      <Navbar />
      <Main element={element} />
      {/* 
      <button onClick={handleDarkMode} className="border-2">
          toggler dark/ligh mode
      </button>
      */}
    </div>
  );
};

export default Layout;
