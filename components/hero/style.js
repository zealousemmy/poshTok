import styled from "styled-components";
import Pics from "../../assets/hero.jpg";
import Hh from "../../assets/d18c616aa7b156550b6b2422b074961a.jpg";
import { colors } from "../../lib/themes/color";
export const HeroSect = styled.div`
  background: ${colors.hero};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${colors.PrimaryColor};
  height: inherit;
  padding: 100px 50px;
  @media screen and (max-width: 980px) {
    padding: 20px;
    /* background-color: orange; */
  }
  @media screen and (max-width: 800px) {
    padding: 30px;
  }
  .banner {
    width: 50%;
    padding-left: 35px;
    @media screen and (max-width: 800px) {
      width: 100%;
      padding-left: 0;
    }
    .text {
      width: 80%;
      margin-top: 10rem;
      h4 {
        font-size: 20px;
        text-transform: capitalize;
        font-family: "montserrat";
        @media screen and (max-width: 800px) {
          margin: 1rem 0;
          font-size: 15px;
        }
      }
      h1 {
        font-size: 50px;
        letter-spacing: 1px;
        line-height: 4rem;
        font-family: "montserrat";
        font-weight: 600;
        @media screen and (max-width: 800px) {
          font-size: 25px;
          letter-spacing: 0px;
          line-height: 2rem;
        }
      }
      p {
        margin: 2rem 0;
        font-size: 20px;
        line-height: 2.5rem;
        /* letter-spacing: 1px; */
      }
      .buttonContainer {
        display: flex;
      }
      button {
        width: 40%;
        height: 90px;
        background: none;
        padding: 0;
        border: none;
        margin-right: 1rem;
        :hover {
          cursor: pointer;
        }
        .img {
          position: relative;
          width: 100%;
          height: inherit;
          @media screen and (max-width: 800px) {
            height: 50px;
          }
        }
        @media screen and (max-width: 980px) {
          width: 50%;
        }
      }
      @media screen and (max-width: 980px) {
        width: 100%;
      }
      @media screen and (max-width: 800px) {
        width: 100%;
        margin-top: 5rem;
        /* h1 {
          font-size: 30px;
          letter-spacing: 2px;
          line-height: 2rem;
        } */
        p {
          font-size: 15px;
          line-height: 1.2rem;
          letter-spacing: 0;
        }
      }
    }
  }
  .image {
    width: 50%;
    height: 85vh;
    position: relative;
    @media screen and (max-width: 980px) {
      height: 70vh;
      margin-top: 5rem;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 40vh;
      margin: 0;
    }
  }
`;
