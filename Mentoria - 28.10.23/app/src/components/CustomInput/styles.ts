import tw from "tailwind-styled-components";

export const StyleInput = tw.input`
    transition-all 
    duration-500
    p-2 
    w-full
    rounded-r-md 
    rounded-l-none
    hover:font-semibold 
    hover:text-lg
    hover:text-black
    placeholder:font-normal 
    placeholder:text-sm
    placeholder:text-muted-foreground
    dark:hover:text-white
`;

export const CustomSpan = tw.span`
    text-sm 
    font-semibold
`;

export const CustomDiv = tw.div`
    flex 
    items-center
`;