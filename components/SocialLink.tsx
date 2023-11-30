import { SocialLinkProps } from "@/types"
import Image from "next/image"
import Link from "next/link"




const SocialLink = ({url,icon} : SocialLinkProps) => {
  return (
    <div className="">
        <Link href={url}>
           {icon && <Image 
           key={url}
            src={icon}
            width={28}
            height={28}
            alt="icon"
            className="bg-secondary rounded-full outline-none p-[1px] transition-all duration-500 -hover:trans"
            />}
        </Link>
    </div>
  )
}

export default SocialLink