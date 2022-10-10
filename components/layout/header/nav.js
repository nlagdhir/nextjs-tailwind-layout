import { useState } from "react";
import MenuIcon from '../../icons/menu';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="hidden sm:flex">
          <Links />
        </div>
        <div className="sm:hidden relative">
            <button className="btn-icon" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
            </button>
            {showMenu && (
                <div className="absolute top-10 right-0 z-50 bg-black shadow-xl rounded p-2">
                    <Links />
                </div>
            )}
        </div>
      </nav>
    </>
  );
};

const Links = () => {
  return (
    <>
      <a className="block pr-2" href="/about">
        About   
      </a>
      <a className="block pr-2" href="/contact">Contact</a>
    </>
  );
};

export default Nav;
