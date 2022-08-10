import React from "react";
import FormComp from "../../universalComponents/form";
import { signUpInput } from "../../util/formArray/signup";
import Image from "next/image";
import image from "../../assets/Pics 2.png";
import { SignUpComp } from "./style";
const SignUp = () => {
  return (
    <SignUpComp id="signup">
      <div className="form">
        <h1>Join Waiting List</h1>
        <FormComp formInput={signUpInput} btnText="submit" />
      </div>
      <div className="image">
        <Image src={image} layout={"fill"} />
      </div>
    </SignUpComp>
  );
};

export default SignUp;
