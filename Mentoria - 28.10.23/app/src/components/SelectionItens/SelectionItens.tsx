import React from "react";
import { CustomIcon } from "./CustomIcon/CustomIcon";
import { Ite, Span} from "./styles";

interface PropsInput {
    span: string,
    nameIcon: "FastForward" | "CalendarHeart" | "BookCheck"
    size?: number;
}

export const SelectionIte: React.FC<PropsInput> = ({span, nameIcon, size}) => {
    
    return (
        <div>
            <Ite>
                <CustomIcon name={nameIcon} size={size}/>
                <Span>{span}</Span>
            </Ite>
        </div>
    )
}