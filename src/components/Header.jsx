import {
  Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,
} from 'flowbite-react';

const Header = () => (
  <Navbar fluid rounded>
    <NavbarBrand href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Amin Alizadeh</span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink href="/blog">Blogs</NavbarLink>
      <NavbarLink href="#projects">Projects</NavbarLink>
      <NavbarLink href="#about-me">About me</NavbarLink>
      <NavbarLink href="#contact-me">Contact me</NavbarLink>
    </NavbarCollapse>
  </Navbar>
);

export default Header;
