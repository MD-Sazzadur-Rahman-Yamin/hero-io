import React from "react";
import loge from "../assets/logo.png";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001931] py-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-[40px]" src={loge} alt="" />
            <p className="text-white">HERO.IO</p>
          </div>
          <div>
            <h6 className="text-white">Social Links</h6>
            <div className="flex justify-between items-center">
              <Twitter className="bg-white rounded-md"></Twitter>
              <Linkedin className="bg-white rounded-md"></Linkedin>
              <Facebook className="bg-white rounded-md" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-white text-center pt-8 border-t-1 border-t-white">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
