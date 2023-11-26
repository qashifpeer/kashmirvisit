import { MouseEventHandler } from "react";
export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    icon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface BlogProps {
    blogId : number;
    blogUrl: string;
    place? : string;
    date? : string;
    title? : string;
    text?: string;
}

export interface SocialLinkProps {
    url: string;
    icon? : string;
}