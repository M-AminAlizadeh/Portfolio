import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
    <nav className="hidden sm:block sm:col-span-1 sm:row-span-5 sm:pt-8">
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
    </nav>
  );
};

export default Navbar;
