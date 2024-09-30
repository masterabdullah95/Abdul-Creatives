import Link from "next/link";
import React from "react";
const moment = require("moment");

const Footer = () => {
  return (
    <>
      {/* Footer starts  */}

      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright {moment().year()}. All right reserved, Abdul Creatives.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <Link href="https://www.facebook.com/abdullah.shoaib.3344">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdullah-shoaib-b0b48849"
              className="pl-4"
            >
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer ends  */}
    </>
  );
};

export default Footer;
