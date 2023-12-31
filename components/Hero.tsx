import React from "react";
import { CustomButton } from ".";
import { CATEGORIES } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero.jpg')] bg-cover bg-no-repeat h-screen w-full z-10 pb-12">
      <div className="max-container padding-container relative top-16 sm:top-[20%] z-10">
        <h1 className="bold-44 sm:bold-52 capitalize max-w-[45rem] dark:text-dark transition-all duration-500">
          Explore the Kashmir with{" "}
          <span className="text-primary">NuzhaKashmir</span>
        </h1>
        <div className="bg-slate-900 opacity-70 py-1 px-2 rounded-lg lg:w-1/2">
          <p className="regular-16 mt-4 text-white w-full">
            Come and join us to explore Kashmir which is nestled in the lap of
            the Himalayas, Kashmir captivates with its breathtaking
            landscapes—verdant valleys, serene lakes, and snow-capped peaks. A
            paradise on Earth, it mesmerizes with its rich culture, saffron
            fields, and the timeless beauty of Dal Lake.
          </p>
        </div>
        <div className="mt-6">
          <CustomButton
            btnType="button"
            title="Travel Plan"
            icon="/icons/plane.svg"
            containerStyles="btn_white_rounded dark:bg-dark dark:text-secondary"
            textStyles=""
          />
        </div>
        <h2 className="text-primary my-4 bold-22">Explore the key points</h2>
        <ul className="flex flex-wrap gap-4">
          {CATEGORIES.map((category) => (
            
              <CategoryItem
                key = {category.title}
                title = {category.title}
                icon = {category.icon}
                link = {category.href}
              />
            
          ))}
        </ul>
      </div>
    </section>
  );
};

type CategoryItem = {
  title: string;
  icon: string;
  link :string;
};

const CategoryItem = ({ title, icon ,link}: CategoryItem) => {
  return (
    <Link
      href={link}
      className="bg-white dark:bg-dark flex-center gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[-2px] transition-all duration-500 rounded-md"
    >
      <Image
        src={icon}
        alt="icon"
        width={22}
        height={22}
        className="dark:bg-secondary dark:p-[3px] dark:rounded-full object-contain"
      />
      <span className="capitalize regular-16 dark:text-slate-10">{title}</span>
    </Link>
  );
};

export default Hero;
