"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../../assets/images/logo.png";
import { Link as LinkScroll, scroller } from "react-scroll";
import Link from "next/link";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 cursor-pointer animation-hover inline-block relative 
  ${
    activeLink === item.id
      ? "text-green-main animation-active shadow-green-main"
      : "text-black font-bold hover:text-green-main"
  }`}
    >
      {item.label}
    </LinkScroll>
  ));
}
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setscrollActive] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full bg-white z-30 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <Image
                src={logo}
                alt="logo"
                className="w-full h-auto"
                qualities={[100]}
                height={100}
                width={120}
                priority
              />
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] iteams-center">
            <CreateMenus
              activeLink={activeLink}
              getMenuItems={menuItems}
              setActiveLink={setActiveLink}
            />
          </ul>
        </nav>
      </header>
    </>
  );
}
