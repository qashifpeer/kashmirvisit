import { BlogProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Blog = ({ blogUrl, place, date, title, text }: BlogProps) => {
  return (
    <div className="w-full flex flex-col justify-between  md:w-[30%] bg-white p-4 h-[30rem] rounded shadow-md mx-auto transition-all duration-500 dark:bg-dark">
      <Image
        key={blogUrl}
        src={blogUrl}
        width={333}
        height={444}
        alt="blog"
        className="w-full h-40 object-cover mb-4"
      />
      <div className="capitalize gap-2 regular-16 text-gray-30">
        {place} - <span className=" ">{date}</span>
      </div>
      <h2 className="bold-22 text-primary mb-2">{title}</h2>
      <p className=" md:max-w-[350px] overflow-hidden regular-14 line-clamp-5">
        {text}
      </p>
      <Link href={"/"}>
        <CustomButton
          btnType="button"
          title="Read More..."
          containerStyles="bg-primary regular-14 px-4 py-2 rounded-lg mt-4 text-secondary"
        />
        {/* <p className='bg-primary text-white px-4 py-2 rounded-lg mt-2 '>read More ...</p> */}
      </Link>
    </div>
  );
};

export default Blog;
