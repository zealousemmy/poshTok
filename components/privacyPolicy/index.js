import React from "react";
import TextListCollector from "../../universalComponents/textListCollector";
import { PrivacyAndPolicy } from "../../util/privacy";
const PrivacyPolicy = () => {
  return (
    <>
      <TextListCollector content={PrivacyAndPolicy} />
    </>
  );
};

export default PrivacyPolicy;
