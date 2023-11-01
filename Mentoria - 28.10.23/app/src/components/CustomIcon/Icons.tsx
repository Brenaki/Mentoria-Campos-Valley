import { Instagram, Mail, Github, Linkedin, AtSign, LockKeyhole, FastForward, CalendarHeart, BookCheck } from "lucide-react";
import { Icon } from './styles';

interface PropsIcon {
    name: "Instagram" | "Github" | "Mail" | "LinkedIn" | "FastForward" | "CalendarHeart" | "BookCheck" | "AtSign" | "LockKeyhole" 
    size?: number;
    style: number;
}

export const CustomIcon: React.FC<PropsIcon> = ({name, size, style}) => {

    switch(name) {
        case "Instagram":
            return <Instagram size={size} className={Icon(style)} />;
        case "Github":
            return <Github size={size} className={Icon(style)} />;
        case "Mail":
            return <Mail size={size} className={Icon(style)} />;
        case "LinkedIn":
            return <Linkedin size={size} className={Icon(style)} />;
        case "AtSign":
            return <AtSign size={size} className={Icon(style)} />;
        case "LockKeyhole":
            return <LockKeyhole size={size} className={Icon(style)} />;
        case "FastForward":
            return <FastForward size={size} className={Icon(style)} />;
        case "CalendarHeart":
            return <CalendarHeart size={size} className={Icon(style)} />;
        case "BookCheck":
            return <BookCheck size={size} className={Icon(style)} />;
        default:
            return null;
    }
}