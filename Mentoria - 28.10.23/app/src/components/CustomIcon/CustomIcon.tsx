import { AtSign, Mail, LockKeyhole } from "lucide-react";
import { Icon } from './styles';

interface PropsIcon {
    name: "AtSign" | "LockKeyhole" | "Mail"
    size?: number;
}

export const CustomIcon: React.FC<PropsIcon> = ({name, size}) => {
    switch(name) {
        case "AtSign":
            return <AtSign size={size} className={Icon} />;
        case "LockKeyhole":
            return <LockKeyhole size={size} className={Icon} />;
        case "Mail":
            return <Mail size={size} className={Icon} />;
        default:
            return null;
    }
}