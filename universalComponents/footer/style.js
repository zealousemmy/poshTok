import styled from "styled-components";
import { colors } from "../../lib/themes/color";
export const FooterComp = styled.div`
  background-color: ${colors.hero};
  display: flex;
  flex-wrap: wrap;
  height: 40vh;
  padding: 20px;
  color: #f8f7f7b2;
  .fContentOne {
    margin: auto;
    p {
      font-size: 18px;
      font-weight: bold;
      @media screen and (max-width: 800px) {
        font-weight: lighter;
      }
    }
    .buttonContainer {
      width: 50%;
      display: flex;
      margin: 1rem auto;
      justify-content: space-between;
      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }
    button {
      width: 50%;
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
      @media screen and (max-width: 800px) {
        height: 60px;
      }
    }
  }
  .allRights {
    width: 100%;
    text-align: center;
    font-size: 25px;
    text-transform: capitalize;
    @media screen and (max-width: 800px) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 800px) {
    height: inherit;
  }
`;
