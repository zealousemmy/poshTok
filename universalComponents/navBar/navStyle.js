import styled from "styled-components";
import { colors } from "../../lib/themes/color";
export const Nav = styled.nav`
  /* background: rebeccapurple; */
  /* background: rgb(155, 116, 194); */
  background-color: white;
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
  .logo {
    height: 73px;
    width: 291px;
    padding-left: 65px;
    @media screen and (max-width: 800px) {
      width: 46%;
      height: 50px;
      padding-left: 10px;
    }
    /* background-color: red; */
    .img {
      position: relative;
      width: 30%;
      height: inherit;
      /* margin: auto; */
      :hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 980px) {
    padding: 0.5rem;
    align-items: flex-start;
  }
  .menuBar {
    display: none;
    color: ${colors.hero};
    @media screen and (max-width: 980px) {
      display: block;
      width: 10%;
      position: absolute;
      top: 2rem;
      right: 10px;
    }
  }

  /* .navDiv {
    background-color: red;
    padding: 5px 0;
    z-index: 2;
  } */
  .navDiv a {
    color: ${colors.hero};
    right: 0px;
    padding: 1rem 0.6rem;
    text-transform: uppercase;
    z-index: -1;
    @media screen and (max-width: 980px) {
      padding: 0.5rem;
    }
  }
  .navDiv .a:hover {
    border-bottom: 2px solid white;
    color: rebeccapurple;
    transition: all 0.2s;
  }
  .navDiv .active {
    border-bottom: 2px solid rgb(55, 14, 109);
    color: rgb(55, 14, 109);
    transition: all 0.2s;
  }
  .navDiv a:hover {
    color: rgb(55, 14, 109);
    transform-origin: left;
    transform: scaleX(1);
    border-bottom: 1px solid ${colors.PrimaryColor};
  }
`;
export const NavItems = styled.div`
  width: 70%;
  display: flex;
  justify-content: right;
  margin-right: 8rem;
  .absolute {
    position: absolute;
    top: -3.5rem;
    font-size: 25px;
    background-color: ${colors.PrimaryColor};
    display: ${({ view }) => (view === true ? "block" : "none")};
  }
  a {
    text-decoration: none;
    font-size: 16px;
    margin: 0 1rem;
    font-family: "montserrat";
    @media screen and (max-width: 980px) {
      font-size: 16px;
      margin: 1rem 0;
    }
  }
  @media screen and (max-width: 980px) {
    display: ${({ view }) => (view === true ? "block" : "none")};
    flex-wrap: wrap;
    margin: 2rem auto;
    width: 100%;
    justify-content: left;
    padding: 0px;
    transition: 0.9s;
    div {
      margin: 1rem 0;
    }
  }
  @media screen and (max-width: 800px) {
    position: absolute;
    top: 2rem;
    background: ${colors.PrimaryColor};
    left: 0;
    padding: 5px 15px;
  }
`;
