import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarPopup = () => {
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
    <div>
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
    </div>
  );
};

export default NavbarPopup;
