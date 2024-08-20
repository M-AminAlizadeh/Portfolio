import { useGlobalState } from '../context/GlobalStatesContext';

const NavbarMobile = () => {
  const { isOpen, setIsOpen } = useGlobalState();
  return (
    <div className="col-span-1 row-span-1 flex justify-center items-center sm:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          width="50"
          src="https://img.icons8.com/ios/50/menu--v7.png"
          alt="menu--v7"
        />
      </button>
    </div>
  );
};

export default NavbarMobile;
