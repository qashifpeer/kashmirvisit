import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ btnType, title, icon, containerStyles } : CustomButtonProps) => {
  return (
    <button
      className={`flex-center gap-2  rounded-full ${containerStyles}`}
      type={btnType}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} className="dark:bg-white dark:rounded-full dark:p-[1px] object-contain" />}
      <label className="whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default CustomButton;
