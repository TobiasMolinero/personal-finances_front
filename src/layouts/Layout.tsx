import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="h-screen flex bg-red-400 overflow-y-hidden">
        <Nav /> 
        <section className="grow h-full p-[16px] overflow-y-auto bg-green-600">
            <Outlet />
        </section>        
    </main>
  )
}

export default Layout