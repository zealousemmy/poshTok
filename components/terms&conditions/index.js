import React from "react";
import TextListCollector from "../../universalComponents/textListCollector";
import { TermsAndCondition } from "../../util/terms&Conditions";
const Terms = () => {
  return (
    <>
      <TextListCollector content={TermsAndCondition} />
    </>
  );
};

export default Terms;
