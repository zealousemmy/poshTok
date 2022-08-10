import React from "react";
import { FooterComp } from "./style";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";
import Image from "next/image";
import playStore from "../../assets/google-play-img.png";
import appStore from "../../assets/available-the-app-store-logo-png-images-14.png";
const Footer = () => {
  return (
    <FooterComp>
      <div className="fContentOne">
        <p>
          Our latest app is one of the best. We are here to promote and help you
          sale your skills and expertise to the world and make money.
        </p>
        <div className="buttonContainer">
          <button>
            <div className="img">
              <Image src={playStore} layout="fill" />
            </div>
          </button>
          <button>
            <div className="img">
              <Image src={appStore} layout="fill" />
            </div>
          </button>
        </div>
      </div>
      <div className="allRights">
        <p>all rights reserved @POSHTOK</p>
      </div>
    </FooterComp>
  );
};

export default Footer;
