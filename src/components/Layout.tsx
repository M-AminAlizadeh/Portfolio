import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';

const Layout = ({ element }: { element: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="border dark:border-white border-black min-h-[90vh] m-2 sm:m-10 p-4 sm:p-10 grid grid-cols-5 grid-rows-6">
      <Header />
      <Navbar />
      <Main element={element} />
      <button onClick={handleDarkMode} className="border-2">
        toggler dark/ligh mode
      </button>
    </div>
  );
};

export default Layout;
