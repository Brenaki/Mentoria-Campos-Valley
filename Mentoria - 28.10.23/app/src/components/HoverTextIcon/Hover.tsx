import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CalendarDays } from "lucide-react";

interface PropsHover {
    title?: string;
    avatar?: string;
    navatar?: string;
    at?: string;
    sentence?: string
    date?: string
}

export const Hover: React.FC<PropsHover> = ({title, avatar, navatar, at, sentence, date}) => {
    
    return (
        <HoverCard>
          <HoverCardTrigger>{title}</HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src={avatar}/>
                        <AvatarFallback>{navatar}</AvatarFallback>
                    </Avatar>
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{at}</h4>
                    <p className="text-sm">
                        {sentence}
                    </p>
                    <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                            {date}
                        </span>
                    </div>
                </div>
            </div>
          </HoverCardContent>
        </HoverCard>
    )
}