import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import NavbarPopup from './NavbarPopup';
import Theme from './Theme';
import Preloader from './Preloader';
import { useGlobalState } from '../context/GlobalStatesContext';
import { optionsDarkMode } from './optionsDarkMode';
import { optionsLightMode } from './optionsLightMode';

const Layout = ({ element }: { element: React.ReactNode }) => {
  const { isDarkMode, isOpen, isLoading, setIsLoading } = useGlobalState();
  const [, setInit] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    setIsLoading(false);
  }, [isDarkMode]);

  const particlesLoaded = async () => {};

  if (isLoading) {
    return <Preloader />;
  }

  return isOpen ? (
    <NavbarPopup />
  ) : (
    <div className="relative">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={isDarkMode ? optionsDarkMode : optionsLightMode}
      />
      <div className="relative z-10 border dark:border-white border-black min-h-[90vh] m-2 sm:m-5 lg:m-10 p-4 sm:p-10 grid grid-cols-5 auto-rows-min">
        <Header />
        <NavbarMobile />
        <Navbar />
        <Main element={element} />
        <Theme />
      </div>
    </div>
  );
};

export default Layout;
