import NavBar, { NavProfileButton, openNav } from "./nav-bar";
import Logo from "./logo";

const Header = () => {

  return (
    <header className=" w-[100%]  py-5 md:px-[5em] sticky top-0 z-50 bg-bgShade">

      <NavBar />
    </header>
  );
};

export default Header;
