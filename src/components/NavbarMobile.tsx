import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarMobile = ({ isOpen, toggleMenu }) => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  const handleClickedLink = (name: string) => {
    setClickedLink(clickedLink === name ? null : name);
  };

  return (
    <div className="border col-span-1 row-span-1 flex justify-center items-center sm:hidden">
      <button onClick={toggleMenu}>
        <img
          width="50"
          src="https://img.icons8.com/ios/50/menu--v7.png"
          alt="menu--v7"
        />
      </button>

      {isOpen && (
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => handleClickedLink(item.name)}
                className={`${
                  clickedLink === item.name ? 'underline' : ''
                } 2xl:text-xl`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarMobile;
