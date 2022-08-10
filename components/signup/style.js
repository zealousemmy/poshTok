import styled from "styled-components";

export const SignUpComp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  margin: 3rem 0;
  @media screen and (max-width: 800px) {
    margin: 0;
    margin-bottom: 1rem;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-family: "montserrat";
    /* margin: 3rem 0; */
    text-transform: uppercase;
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  .form {
    width: 40%;
    margin: 3rem 0;
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 1.5rem 0;
    }
  }
  .image {
    width: 45%;
    height: 80vh;
    position: relative;
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 60vh;
    }
  }
`;
