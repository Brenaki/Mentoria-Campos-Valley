
export const Icon = (style: number) => {
    switch(style){
        case 1: 
            return "bg-slate-200 p-2 rounded-l-md dark:bg-slate-800";
        case 2:
            return "text-primary";
        default:
            return ""
    }
}
