import React from "react";
import { footerContacts } from "../Data";
import { footerSocials } from "../Data";

const Footer = () => {
  return (
    <div className="section">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
        <div>
          <div className="text-xl font-semibold mb-3">Shan Sushi</div>
          <p className="text-[1rem] mb-3">
            An Authentic experience so close to home!
          </p>
          <div className="flex items-center gap-4">
            <span className="">Follow Us</span>
            <div className="h-[3px] w-6 bg-black"></div>
            {footerSocials.map((footerSocial, index) => {
              return (
                <div className="text-[30px]" key={index}>
                  <a href="https://www.facebook.com/shansushibar">{footerSocial}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2">


        </div>
        <div className="">
          <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
          {footerContacts.map((footerContact) => {
            return (
              <div
                className="flex items-center gap-4 mb-4"
                key={footerContact.id}
              >
                <div className="text-xl">{footerContact.icon}</div>
                <div>{footerContact.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">

      </div>
    </div>
  );
};

export default Footer;
