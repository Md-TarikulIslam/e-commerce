import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import "./Menu.css";
import Header from "../Header/Header";

const Menu = () => {
  return (
   <div>
     <div className="menu-style">
      <div className="flex items-center justify-between text-white px-5 md:px-10">
        <div className="flex items-center gap-5">
          <p className="icons">
            <FaFacebookF />
          </p>
          <p className="icons">
            <FaTwitter />
          </p>
          <p className="icons">
            <FaGooglePlusG />
          </p>
          <p className="icons">
            <FaPinterestP />
          </p>
          <p className="icons">
            <FaInstagram />
          </p>
          <p>
            Call: <span className="underline">+01 23456789</span>
          </p>
        </div>
        <div className="md:flex items-center gap-5 hidden ">
          <p>English</p>
          <p>USD</p>
        </div>
      </div>
    </div>
    <Header></Header>
   </div>
  );
};

export default Menu;
