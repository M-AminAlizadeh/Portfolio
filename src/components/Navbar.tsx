import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="col-span-1 row-span-5">
      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
