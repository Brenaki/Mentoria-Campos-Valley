import { FastForward, BookCheck, CalendarHeart } from "lucide-react";
import { Icon } from './styles';

interface PropsIcon {
    name: "FastForward" | "CalendarHeart" | "BookCheck"
    size?: number;
}

export const CustomIcon: React.FC<PropsIcon> = ({name, size}) => {

    switch(name) {
        case "FastForward":
            return <FastForward size={size} className={Icon} />;
        case "CalendarHeart":
            return <CalendarHeart size={size} className={Icon} />;
        case "BookCheck":
            return <BookCheck size={size} className={Icon} />;
        default:
            return null;
    }
}