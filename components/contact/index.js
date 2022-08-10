import React from "react";
import { contactInput } from "../../util/formArray/contact";
import FormComp from "../../universalComponents/form";
import Image from "next/image";
import image from "../../assets/Poshtok logo 1 copy(3).png";
import { ContactComp } from "./style";
const ContactPage = () => {
  return (
    <ContactComp>
      <div className="form">
        <h1>Contact Us</h1>
        <FormComp formInput={contactInput} btnText="submit" />
      </div>
      <div className="imageTextWrapper">
        <div className="image">
          <Image src={image} layout={"fill"} />
        </div>
        <div className="text">
          <h1>PoshTok</h1>
        </div>
      </div>
    </ContactComp>
  );
};

export default ContactPage;
