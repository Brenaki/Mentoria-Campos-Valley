import { AtSign, LockKeyhole, Mail } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export function App() {

  return (
   <>
   <main className="flex min-h-screen min-w-full justify-evenly">
    
    <div className="flex flex-col p-32 gap-y-8">
      <div className="flex items-center justify-center gap-2">
        <img className="w-8 h-8" src="/icon_topwebsite.svg" alt="" />
        <span className="text-3xl text-sky-800 font-bold
        dark:text-sky-600">LearnMore</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">Join the Learning Community</span>
          <img className="w-8" src="/light-bulb.svg" alt="" />
        </div>
        <span className="text-sm text-muted-foreground">Welcome to LearnMore, your gateway to collaborative learning and knowledge exchange</span>
      </div>
      <div className="flex flex-col gap-y-6 min-w-full">
        <span className="font-bold text-lg">Create Your Account</span>
        <div>
          <span 
          className="text-sm font-semibold">Username</span>
          <div className="flex items-center">
            <AtSign className="bg-slate-200 p-2 rounded-l-md dark:bg-slate-800" size={40}/>
            <Input className="transition-all duration-500
            p-2 rounded-r-md rounded-l-none
            hover:font-semibold hover:text-lg
            hover:text-black
            placeholder:font-normal 
            placeholder:text-sm
            placeholder:text-muted-foreground
            dark:hover:text-white"
            placeholder="Enter your username"
            type="text"
            />
          </div>
        </div>
        <div>
          <span 
          className="text-sm font-semibold">Email</span>
          <div className="flex items-center">
            <Mail className="bg-slate-200 p-2 rounded-l-md dark:bg-slate-800" size={40}/>
            <Input className="transition-all duration-500
            p-2 rounded-r-md rounded-l-none
            hover:font-semibold hover:text-lg
            hover:text-black
            placeholder:font-normal 
            placeholder:text-sm
            placeholder:text-muted-foreground
            dark:hover:text-white"
            placeholder="Enter your email address"
            type="email"
            />
          </div>
        </div>
        <div>
          <span 
          className="text-sm font-semibold">Password</span>
          <div className="flex items-center">
            <LockKeyhole className="bg-slate-200 p-2 rounded-l-md dark:bg-slate-800" size={40}/>
            <Input className="transition-all duration-500
            p-2 rounded-r-md rounded-l-none
            hover:font-semibold hover:text-lg
            hover:text-black
            placeholder:font-normal 
            placeholder:text-sm
            placeholder:text-muted-foreground
            dark:hover:text-white"
            placeholder="Enter a secure password (8 - 26 characters)"
            type="password"
            />
          </div>
        </div>
        <Button asChild
        className="transition-all duration-500
        bg-sky-600 opacity-50 text-white
        hover:opacity-100 hover:bg-sky-500">
          <a href="/SignUp" target="_blank">
            Sign Up
          </a>
          </Button>
      </div>
      <span className="flex gap-4 text-sm font-semibold">Already have an account? 
      <a href="/SignIn" target="_blank"
      className="text-sky-600">Sign In</a></span>
    </div>
      <img className="w-[50rem]" src="/woman_studying.svg" alt="" />
   </main>
   </>
  )
}

