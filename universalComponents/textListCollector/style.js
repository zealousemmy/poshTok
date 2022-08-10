import styled from "styled-components";
export const StyledTextListCollector = styled.div`
  padding: 100px 10px;
  div {
    width: 50%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 0 10px;
    }
    h1 {
      text-align: center;
      margin: 1rem 0;
      text-transform: uppercase;
      @media screen and (max-width: 800px) {
        font-size: 18px;
      }
    }
    p {
      margin: 1rem 0;
      font-size: 20px;
      text-align: justify;
      @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 15px;
      }
    }
    h3 {
      font-size: 25px;
      font-weight: bolder;
      text-transform: uppercase;
      margin-top: 1rem;
      @media screen and (max-width: 800px) {
        font-size: 15px;
      }
    }
  }
  .listSect {
    margin: 2rem 0;
    width: 100%;
    font-size: 20px;
    @media screen and (max-width: 800px) {
      padding: 0 10px;
      font-size: 15px;
    }
  }
  .orderedList {
    width: 100%;
    text-align: left;
  }

  .listOrder {
    width: 100%;
    li {
      font-weight: bolder;
      font-size: 30px;
      text-align: left;
      @media screen and (max-width: 800px) {
        font-weight: bold;
        font-size: 15px;
        padding: 0 5px;
      }
    }
  }
  .content {
    width: 100%;
  }
  .addText {
    width: 100%;
  }
  .alphaOrder {
    list-style: lower-alpha;
  }
  .childList {
    li {
      font-weight: normal;
      font-size: 20px;
      text-align: justify;
      @media screen and (max-width: 800px) {
        font-size: 15px;
      }
    }
  }
`;
