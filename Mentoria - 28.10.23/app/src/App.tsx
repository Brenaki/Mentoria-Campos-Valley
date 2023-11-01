import { Outlet } from "react-router-dom";
import { SocialMedia } from "./components/SocialMedias/SocialMedias";
import { Hover } from "./components/HoverTextIcon/Hover";
import { Birthday } from "./components/DateTime/DateToday";

export function App() {

  return (
   <>
    <Outlet />
    <footer className="flex items-center justify-around p-4 bg-sky-800 font-['Poppins'] text-white">
      <div className="flex">
        <Hover title="Developed and Designed Victor A. L. Cerqueira" at="@brenaki" date="Project Started October, 2023" sentence={`Victor Angelo Legat Cerqueira is ${Birthday()} years old and is studying Computer Engineering. His hobbies are playing games, playing basketball and volleyball, programming and listening to music.`} avatar="/avatar.svg" navatar="VALC"/>
      </div>
      <div className="transition-colors flex hover:text-red-500 cursor-pointer">
        <a href="https://www.linkedin.com/company/valc-developer">Copyright © 2023 VALC</a>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <SocialMedia nameIcon="Github" link="https://github.com/brenaki"/>
        <SocialMedia nameIcon="Instagram" link="https://www.instagram.com/victor_angelolc/"/>
        <SocialMedia nameIcon="Mail" link="mailto:victor.legat.cerqueira@gmail.com"/>
        <SocialMedia nameIcon="LinkedIn" link="https://www.linkedin.com/in/victor-a-l-cerqueira/"/>
      </div>
    </footer>

   </>
  )
}

