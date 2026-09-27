
import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto grid grid-cols-1 items-center gap-4 px-4 py-6 sm:grid-cols-2">
      
      
      <aside className="flex items-center gap-3">
        <Image
          src={logo}
          alt="FitLog logo"
          width={40}
          height={40}
        />

        <div>
          <p className="text-xl font-bold">FITLOG</p>
        </div>
      </aside>

     
      <div className="text-left text-sm text-gray-500 sm:text-right">
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved
        </p>

       
      </div>

    </footer>
  );
};

export default Footer;

