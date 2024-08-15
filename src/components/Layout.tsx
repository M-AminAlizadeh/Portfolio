import Header from './Header';
import { Link } from 'react-router-dom';

const Layout = ({ element }: { element: React.ReactNode }) => {
  return (
    <div className="border-2 min-h-[90vh] m-10 p-10 grid grid-cols-5 grid-rows-6">
      <Header />
      <nav className="border-2 border-red-600 col-span-1 row-span-5">
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
      <main className="border-2 border-blue-700 col-span-4 row-span-5 p-8">
        {element}
      </main>
    </div>
  );
};

export default Layout;
