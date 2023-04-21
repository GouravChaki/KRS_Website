import React from "react";
import Links from "./Links";
import Title from "./Title";

function Footer() {
  return (
    <div className="pt-24 flex justify-center pb-16" id="contact">
      <div className="w-[85%]">
        <hr className="h-1 bg-blue-400" />
        <div className="flex justify-between mt-8">
          <div>
            <Title />
          </div>
          <div>
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
