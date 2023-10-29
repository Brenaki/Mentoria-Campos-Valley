import { NavBar } from "@/components/NavBar/NavBarProps";

const links = [
    { label: 'How to use?', url: '/HowUse' },
    { label: 'About', url: '/About' },
    { label: 'Sign In', url: '/SignIn' },
    { label: 'Sign Up', url: '/SignUp', button: 'transition-colors duration-300 bg-sky-500 hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium' },
   ];

export const Home = () => {
    return (
        <>
            <NavBar links={links} />
        </>
    )
}