import React from "react";
import { CustomIcon } from "../CustomIcon/Icons";
import { CustomDiv, CustomSpan, StyleInput } from "./styles";

interface PropsInput {
    span: string,
    nameIcon: "AtSign" | "LockKeyhole" | "Mail"
    size?: number;
    placeholder?: string;
    type?: string;
}

export const CustomInput: React.FC<PropsInput> = ({span, nameIcon, size, placeholder, type}) => {
    
    return (
        <div>
          <CustomSpan>{span}</CustomSpan>
          <CustomDiv>
            <CustomIcon name={nameIcon} size={size} style={1}/>
            <StyleInput placeholder={placeholder} type={type}/>
          </CustomDiv>
        </div>
    )
}