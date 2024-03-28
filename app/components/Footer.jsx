import React from "react";
import Logo from "../assets/logo1.png";
import Link from "next/link";
import Image from "next/image";
import crypto1 from "../assets/crypto.png";
import crypto2 from "../assets/crypto1.png";
import { FaStar } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" pt-[8rem]">
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid plus cursor-pointer  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-24 xl:grid-cols-5">
            <div className=" col-span-1 space-y-4 flex flex-col  ">
              <Link href="/">
                <div className=" max-w-[150px] max-h-[100px]">
                  <Image src={Logo} className=" max-w-[150px]" />
                </div>
              </Link>
              <p className=" text-xs inter font-medium ">
                The Best Crpto INvestment Platform ,fast ,secured and user
                friendly
              </p>
              <div className="flex items-center gap-4">
                <div className="max-w-[120px] h-auto">
                  <Image src={crypto1} />
                </div>
                <div className="max-w-[120px] h-auto">
                  <Image src={crypto2} />
                </div>
              </div>
            </div>
            {/* Column 1 */}

            {/* Column 2 */}
            <div>
              <h2 className="text-gray-700 text-sm inter font-bold mb-4">
                Quick Links
              </h2>
              <ul className="text-gray-200 space-y-2">
                <li className="plus text-gray-600 inter  smooth hover:text-gray-700 hover:pl-3 text-sm font-noemal py-1">
                  Home
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  About
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Contact
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  FAQs
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Terms of Service
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Privacy Policy
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Blog
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h2 className="text-gray-700 text-sm inter font-bold mb-4">
                Connect
              </h2>
              <ul className="text-gray-200 space-y-2">
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Our Community
                </li>

                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Facebook
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Blog
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-700 text-sm inter font-bold mb-4">
                Services
              </h2>
              <ul className="text-gray-200 space-y-2">
               
                <li className="plus text-gray-600 smooth hover:text-gray-700 hover:pl-3 text-sm font-noemal py-1">
                  Quick Refunds
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Capital Returns
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  24/7 Customer Support
                </li>
                <li className="plus text-gray-600 inter font-medium text-xs smooth hover:text-gray-700 hover:pl-3  font-noemal py-1">
                  Secure Payment Options
                </li>
                
              </ul>
            </div>
            <div>
              
              <div className="text-sm flex items-center gap-2 text-yellow-500">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
              </div>
              <ul className="text-gray-600 inter pt-5 text-xs font-medium space-y-2">
                <p>4190 succesfull transfers completed with 98.7% success rate and five star reviews</p>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
