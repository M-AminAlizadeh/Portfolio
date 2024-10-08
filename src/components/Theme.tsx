import { useState } from 'react';
import { useGlobalState } from '../context/GlobalStatesContext';

const Theme = () => {
  const { setIsDarkMode } = useGlobalState();
  const [theme, setTheme] = useState('light');
  const handleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
    if (e.target.value === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };
  return (
    <div className="absolute bottom-12 text-sm -left-10 sm:-left-16 lg:-left-20 lg:text-base flex flex-row-reverse gap-3  -rotate-90">
      <div className="flex flex-row-reverse gap-1">
        <label htmlFor="dark" className="dark:text-white">
          Dark
        </label>
        <input
          id="dark"
          name="theme"
          type="radio"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleTheme}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row-reverse gap-1">
        <label htmlFor="light" className="dark:text-white">
          Light
        </label>
        <input
          id="light"
          name="theme"
          type="radio"
          value="light"
          checked={theme == 'light'}
          onChange={handleTheme}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Theme;
