import React from "react";
import ContactForm from "./ContactForm";
import NewsletterFooter from "./NewsletterFooter";

const FooterTop = () => {
  return (
    <>
      {/* FooterTop starts  */}

      <ContactForm />
      <div
        className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
        style={{ backgroundImage: "url(/assets/img/map1.png)" }}
      ></div>

      <NewsletterFooter />
      {/* FooterTop ends  */}
    </>
  );
};

export default FooterTop;
