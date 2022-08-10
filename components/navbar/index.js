import React from "react";
import NavBar from "../../universalComponents/navBar";
import { navItems } from "../../util/navArray";
import logoImg from "../../assets/Poshtok logo 1 copy(3).png";
const Nav = () => {
  return <NavBar logo={logoImg} navItem={navItems} />;
};

export default Nav;
