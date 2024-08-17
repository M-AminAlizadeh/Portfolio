const NavbarMobile = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className="border col-span-1 row-span-1 flex justify-center items-center sm:hidden">
      <button onClick={toggleMenu}>
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
