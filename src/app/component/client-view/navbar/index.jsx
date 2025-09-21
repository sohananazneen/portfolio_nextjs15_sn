"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../assets/images/logo.png";
import { Link as LinkScroll, scroller } from "react-scroll";
import Link from "next/link";
import { delay } from "framer-motion";
import { set } from "mongoose";

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
      className={`px-4 py-2 cursor-pointer inline-block relative font-bold
      transition-[background-size,color] duration-300 ease-out
      bg-gradient-to-r from-green-500 to-green-500 bg-no-repeat bg-[position:0_100%]
      ${
        activeLink === item.id
          ? "text-green-500 bg-[length:100%_2px]"
          : "text-black hover:text-green-500 bg-[length:0%_2px] hover:bg-[length:100%_2px]"
      }`}
    >
      {item.label}
    </LinkScroll>
  ));
}
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setscrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 w-full bg-white z-30 transition-shadow transition-colors duration-300 ease-in-out hover:shadow-md ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-500">
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
          <div className="col-start-10 col-end-12 flex justify-end">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-2 px-5 border-2 border-green-600 text-green-600 font-semibold rounded-full text-xl hover:bg-green-500 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 right-0 left-0 z-20 px-4 sm:px-8 shadow-teal-50">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              activeLink={activeLink}
              getMenuItems={menuItems}
              setActiveLink={setActiveLink}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
