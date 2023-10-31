import tw from "tailwind-styled-components";

export const Ite = tw.div`
    transition-all
    duration-300
    flex flex-col w-[8rem]
    items-center
    justify-center
    gap-2 
    hover:-translate-y-3
    hover:bg-sky-500
    hover:text-white
    p-4
    rounded-md
` 

export const Span = tw.span`
    text-sm
    font-serif
    font-medium
`