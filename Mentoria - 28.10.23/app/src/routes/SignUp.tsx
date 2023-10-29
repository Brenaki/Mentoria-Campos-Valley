import { Button } from "../components/ui/button";
import { CustomInput } from "../components/CustomInput/CustomInput";
import { TextLink } from "../components/TextLink/TextLink";

export const SignUp = () => {

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
        <CustomInput span="Username" nameIcon="AtSign" placeholder="Enter your username" type="text" size={40}/>
        <CustomInput span="Email" nameIcon="Mail" placeholder="Enter your email address" type="email" size={40}/>
        <CustomInput span="Password" nameIcon="LockKeyhole" placeholder="Enter a secure password (8 - 26 characters)" type="password" size={40}/>
        <Button asChild className="transition-all duration-500 bg-sky-600 opacity-50 text-white hover:opacity-100 hover:bg-sky-500">
            <a href="/SignUp" target="_blank">
              Sign Up
            </a>
          </Button>
      </div>
      <TextLink link="/SignIn" span="Already have an account?" nameLink="Sign In"/>
    </div>
      <img className="w-[50rem]" src="/woman_studying.svg" alt="" />
   </main>
   </>
  )
}