  'use client'
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CustomButton } from ".";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened)
  return (
    <header className="relative">
      <nav className="flex-between max-container px-12 py-1 z-30 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]">
        <Link href="/" className="bold-28">
          <Image 
          src="/logo3.png"
          width={50}
          height={50}
          alt="logo"
          className="object-contain rounded-full"
          
          />
        </Link>

        {/* ================DESKTOP============== */}

        <ul className="hidden lg:flex h-full ">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="flex mx-8 relative gap-2 text-gray-50 group"
            >
              <Image
                src={link.iconURL}
                alt={link.label}
                height={20}
                width={20}
              />
              {link.label}
              <span className="absolute inline-block h-[2px] w-0 bg-black -bottom-2 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>
        {/* === button for login */}
        {/* <div className="hidden lg:block">
          <CustomButton
            type="button"
            title="login"
            icon="/user.svg"
            variant="btn_dark_rounded"
          />
        </div> */}

{!menuOpened ? (
        <Image
          src="/icons/menu.svg"
          alt="menuicon"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="/icons/close.svg"
          alt="closeicon"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      <ul className={ `flex flex-col p-12 justify-center fixed top-14 right-0   ${!menuOpened ? "right-[-100%]" : ""} bg-slate-100 rounded-lg transition-all duration-500 shadow-md`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex m-6 relative gap-1 text-gray-50 group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="absolute inline-block h-[2px] w-0 bg-black -bottom-2 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>
      </nav>
    </header>
  );
};

export default Navbar;