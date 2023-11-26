import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";
import { SocialLink } from ".";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full bg-primary">
      <div className="padding-container flex flex-col py-4">
       
        {/* section navs */}
        <div className="flex max-md:flex-col-reverse  gap-4">
          
          {/* =========Logo Section ======= */}
          <div className="flex flex-col w-full md:w-1/3">
            <Image
              src="/logo3.png"
              width={50}
              height={50}
              alt="logo3"
              className="object-contain rounded-full"
            />
            <p className="text-secondary regular-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              repellendus illo a corporis molestias facere quibusdam quod
              incidunt quo. Nobis.
            </p>
            <div className="flex gap-2 py-4 ">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink url={link.url} icon={link.icon} />
              ))}
            </div>
          </div>
          
          {/*========= Footer Links Section =============== */}
          <div className=" w-full flex  flex-wrap  gap-8 justify-start items-start">
            {
              FOOTER_LINKS.map((link) => (
                <div className="flex flex-col justify-start items-start">
                  <span className="bold-16 my-2 border-b-2 border-secondary text-accent ">{link.title}</span>
                  {
                    link.links.map((item)=>(
                      <div className="flex flex-col justify-start items-start text-secondary py-1">
                        <Link href={item.url} className="regular-14 hover:-translate-y-[-2px] transition-all duration-500">{item.title}</Link>
                      </div>
                    ))
                  }
                
                 </div>
              ))
            }

          </div>

        </div>

        {/* section-copyright */}
      <div className="border-t-2 border-gray-20 ">
       <p className="text-center text-gray-10 regular-14">&copy; 2023 kashmirvisit</p> 
      </div>
       
      </div>
    </footer>
  );
};

export default Footer;
