import React from "react";
import { Link, Span } from "./styles";

interface PropsTextLink {
    span: string;
    nameLink: string;
    link: string;
}

export const TextLink: React.FC<PropsTextLink> = ({span, nameLink, link}) => {
    return (
        <Span>{span}
        <Link href={link} target="_blank">{nameLink}</Link></Span>
    )
}