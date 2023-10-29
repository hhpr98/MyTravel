import React from "react";

const Footer = (): JSX.Element => {
  return (<div
    className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800"
  >
    © All rights reserved <a
      className="text-gray-200 underline"
      href="https://github.com/hhpr98"
    >
      @hhpr98
    </a>
  </div>);
};

export default Footer;
