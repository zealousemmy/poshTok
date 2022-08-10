import styled from "styled-components";

export const ContactComp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  margin: 3rem 0;
  h1 {
    width: 100%;
    text-align: center;
    margin: 3rem 0;
  }
  .form {
    width: 40%;
    @media screen and (max-width: 1000px) {
      width: 60%;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
    }
  }
  .imageTextWrapper {
    /* background-color: red; */
    width: 40%;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
      padding: 0 20px;
      width: 40%;
    }
    @media screen and (max-width: 800px) {
      padding: 0;
      width: 50%;
    }
    .text {
      font-size: 40px;
      margin-top: -5rem;
      @media screen and (max-width: 1000px) {
        margin-top: -4rem;
        margin-right: -2rem;
        font-size: 28px;
      }
      @media screen and (max-width: 800px) {
        margin-top: -2rem;
        margin-right: -6rem;
        font-size: 18px;
      }
    }
    h1 {
      margin: 0;
      color: rebeccapurple;
    }
  }
  .image {
    width: 50%;
    height: 50vh;
    position: relative;
    @media screen and (max-width: 1000px) {
      width: 50%;
      height: 30vh;
      /* margin-top: 1rem; */
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 30vh;
      margin-top: 3rem;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
