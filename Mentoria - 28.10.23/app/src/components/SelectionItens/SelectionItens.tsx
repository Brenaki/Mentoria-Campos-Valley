import React from "react";
import { CustomIcon } from "../CustomIcon/Icons";
import { Items, Span} from "./styles";

interface PropsSelectionItems {
    span: string,
    nameIcon: "FastForward" | "CalendarHeart" | "BookCheck"
    size?: number;
}

export const SelectionItems: React.FC<PropsSelectionItems> = ({span, nameIcon, size}) => {
    
    return (
        <div>
            <Items>
                <CustomIcon name={nameIcon} size={size} style={2}/>
                <Span>{span}</Span>
            </Items>
        </div>
    )
}