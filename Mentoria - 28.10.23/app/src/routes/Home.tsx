import { NavBar } from "@/components/NavBar/NavBarProps";
import { SelectionItems } from "@/components/SelectionItens/SelectionItens";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const links = [
    { label: 'How to use?', url: '/HowUse' },
    { label: 'About', url: '/About' },
    { label: 'Sign In', url: '/SignIn' },
    { label: 'Sign Up', url: '/SignUp', button: 'transition-colors duration-300 bg-white hover:bg-sky-500 text-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium' },
   ];

export const Home = () => {
    return (
        <>
            <main className="flex flex-col min-h-screen min-w-full">
                <NavBar links={links} />
                <div className="flex gap-[12rem] mt-[18rem] min-h-full p-8 items-center justify-center sm:flex-col md:flex-col lg:flex-row">
                    <div className="flex justify-center items-center">
                        <h1 className="font-semibold text-[2.5rem]">Come Study Better and Learn More</h1>
                    </div>
                    <div className="flex flex-col sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-start lg:items-stretch">
                        <span className="text-sm text-muted-foreground font-serif">Intro</span>
                        <div className="flex w-[45rem] gap-8">
                            <p className="text-md">This is where you can organize your studies and be more productive when learning something new!</p>
                            <Button className="transition-colors duration-300 bg-white hover:bg-sky-500"><a href="/SignUp"><ChevronRight className="text-primary"/></a></Button>
                        </div>
                        <div className="flex gap-8 p-8 justify-evenly sm:flex-col md:flex-col lg:flex-row">
                            <SelectionItems nameIcon="FastForward" size={30} span="Less Time" />
                            <SelectionItems nameIcon="BookCheck" size={30} span="Organize your academic life" />
                            <SelectionItems nameIcon="CalendarHeart" size={30} span="Connects with your calendar" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}