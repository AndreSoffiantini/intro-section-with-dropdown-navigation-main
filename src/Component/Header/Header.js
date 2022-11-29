import "./Header.css";
import { useState, useEffect } from "react";
import logo from "../../images/logo.svg";

import NavbarSmall from "./NavbarSmall/NavbarSmall";
import NavbarLarge from "./NavbarLarge/NavbarLarge";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <header className="header">
      <img src={logo} alt="snap logo" />
      {screenWidth < 992 ? <NavbarSmall /> : <NavbarLarge />}
    </header>
  );
};

export default Header;
