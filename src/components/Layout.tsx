import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ element }: { element: React.ReactNode }) => {
  return (
    <div className="border-2 min-h-[90vh] m-10 p-10 grid grid-cols-5 grid-rows-6">
      <Header />
      <Navbar />
      <main className="border-2 border-blue-700 col-span-4 row-span-5 p-8">
        {element}
      </main>
    </div>
  );
};

export default Layout;
