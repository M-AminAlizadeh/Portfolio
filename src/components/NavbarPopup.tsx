import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalStatesContext';

const NavbarPopup = () => {
  const { isOpen, setIsOpen } = useGlobalState();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="p-5">
      <button type="button" className="w-full flex justify-end">
        <img
          src="https://img.icons8.com/material-rounded/50/close-window.png"
          alt="close-window"
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
      <ul className="flex flex-col justify-center items-center h-[70vh] gap-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarPopup;
