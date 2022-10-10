import Nav from "./nav";
import Search from "./search";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="flex justify-between item-center p-2">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="pr-2">
          <Search />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
