import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";
import { SocialLink } from ".";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" w-full bg-primary">
      <div className="padding-container flex flex-col py-4">
        {/* section navs */}
        <div className="flex max-md:flex-col-reverse  gap-4">
          {/* =========Logo Section ======= */}
          <div className="flex flex-col w-full md:w-1/3">
            <Image
              src="/logo-footer.png"
              width={50}
              height={50}
              alt="logo3"
              className="object-contain rounded-full"
            />
            <p className="text-white regular-14">
              "Nuzha-Kashmir: Your Gateway to Enchanting Journeys. Explore the
              beauty of Kashmir with our curated packages, creating timeless
              travel memories.".
            </p>
            <div className="flex gap-2 py-4 ">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink url={link.url} icon={link.icon} />
              ))}
            </div>
          </div>

          {/*========= Footer Links Section =============== */}
          <div className=" w-full flex  flex-wrap  gap-8 justify-start items-start">
            {FOOTER_LINKS.map((link) => (
              <div className="flex flex-col justify-start items-start">
                <span className="bold-16 my-2 border-b-2 border-secondary text-white ">
                  {link.title}
                </span>
                {link.links.map((item) => (
                  <div className="flex flex-col justify-start items-start text-white py-1">
                    <Link
                      href={item.url}
                      className="regular-14 hover:-translate-y-[-2px] transition-all duration-500"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* section-copyright */}
        <div className="border-t-2 border-gray-20 flex justify-between">
          <p className="text-center text-gray-10 regular-14">
            &copy; 2023 NuzhaKashmir
          </p>
          <div className="md:flex gap-4 items-center">
            <p className="text-center text-gray-10 regular-14 flex gap-1 items-center">
            <FaPhoneVolume /> +91 70066 15905
            </p>
            <p className="text-center text-gray-10 regular-14 flex gap-1 items-center">
            <MdEmail /> info@nuzhakashmir.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
