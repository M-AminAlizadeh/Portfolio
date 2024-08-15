import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';

const Layout = ({ element }: { element: React.ReactNode }) => {
  return (
    <div className="border-2 min-h-[90vh] m-10 p-10 grid grid-cols-5 grid-rows-6">
      <Header />
      <Navbar />
      <Main element={element} />
    </div>
  );
};

export default Layout;
