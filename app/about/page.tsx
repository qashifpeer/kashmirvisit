import { CustomButton } from "@/components";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="h-auto transition-all duration-500 relative">
      <div className="max-w-screen-2xl px-40 mx-auto  pt-[68px]">
        <div className="w-full h-[300px] relative">
          <Image
            src="/places/about-banner.jpg"
            alt="about-banner"
            fill={true}
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-slate-800 opacity-60 p-2 rounded-lg">
            <h1 className="bold-28 text-secondary">Your Journey, Our Expertise,</h1>
            <h3 className="regular-16 text-secondary">Experience Kashmir Like Never Before</h3>
          </div>
        </div>

        <div className="flex gap-8 py-2 items-center ">
          <div className="flex-1">
            <h2 className="bold-22">Who are we?</h2>
            <p className="regular-14">Founded by passionate locals, we are more than a travel agency; we are storytellers, curators of bespoke experiences, and guardians of Kashmir's cultural tapestry. 
            <br/>
           
            With an unwavering commitment to authenticity, our team, deeply rooted in the region, opens the doors to hidden gems, picturesque landscapes, and warm hospitality. 
            <br />
            <br />
            At NuzhaKashmir.com, we redefine travel, infusing each journey with personalized charm, local insights, and a touch of magic. Join us as we invite you to explore the heart and soul of Kashmir, creating memories that linger for a lifetime.</p>
          </div>
          <div className="flex-1">
            <h2 className="bold-22">What do we do?</h2>
            <p className="regular-14">At NuzhaKashmir.com, we craft tailor-made journeys to showcase the essence of Kashmir. We go beyond conventional travel, offering curated experiences that delve into the region's rich cultural tapestry, breathtaking landscapes, and unique charm. 
              <br />
              <br />
              Our services include personalized travel packages, expert guidance, and access to exclusive deals, ensuring each adventure is exceptional. Whether you seek cultural immersion, nature exploration, or tranquil retreats, we specialize in transforming your travel dreams into reality, creating unforgettable moments that define the essence of Kashmir.</p>
          </div>
        </div>
        <CustomButton
            btnType="button"
            title="Contact Us"
            icon="/icons/plane.svg"
            containerStyles="btn_dark_rounded dark:bg-dark dark:text-secondary mx-auto my-4"
            textStyles=""
          />
      </div>
    </section>
  );
};

export default AboutPage;
