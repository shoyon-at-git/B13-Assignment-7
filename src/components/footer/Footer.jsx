import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-[#244d3f] mt-10">
      <div className="max-w-277.5 mx-auto pt-5 lg:pt-20 pb-8 flex flex-col items-center justify-center text-center text-gray-400 text-sm px-4">

        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">KeenKeeper</h1>

          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="text-lg text-white">Social Links</h3>

          <div className="flex gap-4 justify-center">
            <a href="#" className="bg-white flex items-center justify-center text-black w-9 h-9 rounded-full hover:scale-110 transition">
              <TbBrandInstagramFilled className="w-5 h-5" />
            </a>

            <a href="#" className="bg-white flex items-center justify-center text-black w-9 h-9 rounded-full hover:scale-110 transition">
              <FaFacebook className="w-5 h-5" />
            </a>

            <a href="#" className="bg-white flex items-center justify-center text-black w-9 h-9 rounded-full hover:scale-110 transition">
              <RiTwitterXLine className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-6"></div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <ul className="flex gap-4">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;