import React from "react";
import { DivInput, CustomSubmit, CustomForm } from "./style";
const FormComp = ({ formInput, btnText }) => {
  return (
    <CustomForm>
      {formInput?.map((inputItem, key) => (
        <DivInput key={key}>
          <label>{inputItem.label}</label>
          {inputItem.type !== "textarea" ? (
            <input
              type={inputItem.type}
              placeholder={inputItem.placeholder}
              name={inputItem.name}
            />
          ) : (
            <textarea
              type={inputItem.type}
              placeholder={inputItem.placeholder}
              name={inputItem.name}
              cols={inputItem.cols}
              rows="10"
            ></textarea>
          )}
        </DivInput>
      ))}
      <CustomSubmit>{btnText}</CustomSubmit>
    </CustomForm>
  );
};

export default FormComp;
