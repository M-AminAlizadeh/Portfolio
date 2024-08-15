import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <nav className="col-span-1 row-span-5">
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
