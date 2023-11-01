import React from "react";
import { CustomIcon } from '../CustomIcon/Icons';
import { Media } from "./styles";
import { Button } from "../ui/button";

interface PropsSocialMedia {
    nameIcon: "Instagram" | "LinkedIn" | "Mail" | "Github"
    size?: number;
    link: string;
}

export const SocialMedia: React.FC<PropsSocialMedia> = ({nameIcon, size, link}) => {
    
    return (
        <Button className={Media}>
            <a href={link}>
                        <CustomIcon name={nameIcon} size={size} style={0}/>
            </a>
        </Button>
    )
}