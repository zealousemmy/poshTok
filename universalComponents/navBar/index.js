import Link from "next/link";
import React from "react";
import { Nav, NavItems } from "./navStyle";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import Image from "next/image";
import { GiCrossMark } from "react-icons/gi";
const NavBar = ({ logo, navItem }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setShow(!show);
  };
  const handleLinkClick = (item) => {
   
      setShow(false);
      router.push(item.path);
  };
  const takeHome = () => {
    router.push("/");
  };
  return (
    <Nav onBlur={handleClick}>
      <div className="logo">
        <div className="img" onClick={takeHome}>
          <Image src={logo} layout="fill" />
        </div>
      </div>
      <div className="menuBar ">
        {console.log(show)}
        <GiHamburgerMenu
          className="showDisplay"
          view={show}
          onClick={handleClick}
        />
      </div>
      <NavItems view={show}>
        <div className="menuBar absolute">
          <GiCrossMark view={show} onClick={handleClick} />
        </div>

        {navItem.map((item, key) => (
          <div key={key} className="navDiv">
            <a
              onClick={(e) => {
                handleLinkClick(item);
              }}
              className={router.asPath === item.path ? "active" : ""}
            >
              {item.name}
            </a>
          </div>
        ))}
      </NavItems>
    </Nav>
  );
};

export default NavBar;
