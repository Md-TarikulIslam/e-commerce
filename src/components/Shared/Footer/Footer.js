import React from "react";
import "./Footer.css";
import logo from "../../../components/assets/images/logo/logo.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import { Input } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div>
      <div className="foo px-5 md:px-10 lg:px-0 py-10">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-start lg:items-center justify-around">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <span className="foo-icons">
              <FaFacebookF />{" "}
            </span>
            <span className="foo-icons">
              <FaTwitter />{" "}
            </span>
            <span className="foo-icons">
              <FaGooglePlusG />{" "}
            </span>
            <span className="foo-icons">
              <FaPinterestP />{" "}
            </span>
            <span className="foo-icons">
              <FaInstagram />{" "}
            </span>
          </div>
          <div className="flex flex-col items-start lg:flex-row lg:items-center gap-3 lg:gap-0">
            <p className="text-2xl font-bold mr-3">Newsletter</p>
            <div className="w-72 mr-3">
              <Input
                type="email"
                placeholder="Email Address"
                className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>

            <button className="send-btn">Submit</button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-0 items-start justify-between lg:px-32 pt-10">
          <div className="leading-10 ">
            <p>
              Räfsgatan 36,
              <br /> 21633 Limhamn,
              <br /> Sweden
            </p>
            <a href="tel:+46 708698276">
              <span>+46 708698276</span>
            </a>
            <br />
            <a href="mailto: info@kodeend.com" className="text">
              info@kodeend.com
            </a>
            <br />
            <a target="_blank" href="https://www.kodeend.com/">
              KodeEnd IT Solutions AB
            </a>
          </div>
          <div className="leading-10">
            <p className="hover:text-red-300">Contact Us</p>
            <p className="hover:text-red-300">Designers</p>
            <p className="hover:text-red-300">Terms & Conditions</p>
            <p className="hover:text-red-300">Returns & Exchanges</p>
            <p className="hover:text-red-300">Shipping & Depvery</p>
            <p className="hover:text-red-300">Privacy Popcy</p>
          </div>
          <div className="leading-10">
            <p className="hover:text-red-300">Store Location</p>
            <p className="hover:text-red-300">My Account</p>
            <p className="hover:text-red-300">Orders Tracking</p>
            <p className="hover:text-red-300">Size Guide</p>
            <p className="hover:text-red-300">FAQs</p>
            <p className="hover:text-red-300">Shortcode</p>
          </div>
          <div className="leading-10">
            <div className="">
              <p>Monday - Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
          </div>
          <div className="leading-10">
            <div className="">
              <p>08:00 - 20:00</p>
              <p>09:00 - 21:00</p>
              <p>13:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 py-5">
        <p>
          <FaRegCopyright />
        </p>
        <h1>
          2023 Created by{" "}
          <a
            target="_blank"
            href="https://www.kodeend.com/"
            className="text-red-400 hover:underline"
          >
            KodeEnd IT Solutions AB.
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
