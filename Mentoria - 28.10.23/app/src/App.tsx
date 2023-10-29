import { Outlet } from "react-router-dom";


export function App() {

  return (
   <>
    <Outlet />
    <footer>
     <article> Algumas informações de copyright ou talvez alguma informação do autor de um </article>
    </footer>

   </>
  )
}

