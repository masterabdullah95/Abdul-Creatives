"use client";
import React, { useRef } from "react";
import Link from "next/link";
import ToastNotification from "./ToastNotification";
import Image from "next/image";

const Header = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);

  const showHideMobileMenu = () => {
    ref1.current.classList.toggle("hidden");
    ref.current.classList.toggle("block");
  };

  return (
    <>
      {/* Header start  */}
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute bg-[#5442A1]">
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/" className="text-white">
              <h1 className="text-center text-4xl text-white sm:text-left sm:text-3xl md:text-4xl font-Fredoka">
                Abdul Creatives
              </h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <Link href="#about">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#services">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#clients">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Clients
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#work">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Work
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#statistics">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Statistics
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#blog">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link href="#contact">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden" ref={ref}>
            <button onClick={showHideMobileMenu}>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu  */}
      <div
        className="fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 hidden"
        ref={ref1}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={showHideMobileMenu}
          >
            <Image
              src="/assets/img/icon-close.svg"
              className="h-10 w-auto"
              alt="image"
              width={100}
              height={100}
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <Link href="#about" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  About
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#services" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Services
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#portfolio" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Portfolio
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#clients" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Clients
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#work" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Work
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#statistics" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Statistics
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#blog" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Blog
                </span>
              </Link>
            </li>

            <li className="py-2">
              <Link href="#contact" onClick={showHideMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ToastNotification />
      {/* Header end  */}
    </>
  );
};

export default Header;
