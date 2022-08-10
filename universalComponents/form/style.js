import styled from "styled-components";
import { colors } from "../../lib/themes/color";

export const CustomForm = styled.div`
  width: 100%;
  /* background-color: red; */
  @media screen and (max-width: 800px) {
    padding: 0 5px;
  }
`;
export const DivInput = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    /* padding: 0 8px; */
    margin: 1rem 0;
  }
  label {
    font-family: "montserrat";
  }
  input {
    border-style: none;
    background-color: #f8f7f7b2;
    padding: 15px;
    border-radius: 5px;
    width: 80%;
    margin: 1rem 0;
    outline: none;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  textarea {
    border-style: none;
    background-color: #f8f7f7b2;
    outline: none;
    padding: 12px;
    border-radius: 5px;
    width: 80%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const CustomSubmit = styled.button`
  padding: 15px;
  width: 20%;
  background-color: ${colors.hero};
  color: ${colors.PrimaryColor};
  :hover {
    cursor: pointer;
  }
  border-style: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bolder;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    width: 100%;
    border-radius: 4px;
  }
`;
