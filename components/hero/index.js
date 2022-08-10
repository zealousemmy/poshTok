import React from "react";
import HeroPic from "../../assets/hero.jpg";
import { HeroSect } from "./style";
import Image from "next/image";
import Hh from "../../assets/rm332-s70-kwan-01-removebg-preview.png";
import HeroSideImg from "../../assets/pics 1.png";
import playStore from "../../assets/google-play-img.png";
import appStore from "../../assets/available-the-app-store-logo-png-images-14.png";
const Hero = () => {
  return (
    <HeroSect HeroImage={"red"}>
      <div className="banner">
        <div className="text">
          <h4> Get the Latest trending app! </h4>
          <h1>POSHTOK REAL TIME CHAT APPLICATION!</h1>
          <p>
            There are millions of apps over the stores, but our latest app is
            one of the best. We are here to promote and help you sale your
            skills and expertise to the world and make money.
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
      </div>
      <div className="image">
        <Image src={HeroSideImg} layout={"fill"} />
      </div>
    </HeroSect>
  );
};

export default Hero;
