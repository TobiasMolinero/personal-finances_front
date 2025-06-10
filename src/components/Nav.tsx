import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="h-full w-[20vw] p-[16px] shrink-0 flex flex-col gap-y-[16px] bg-blue-400">
        <h4>Nav</h4>
        <div className="grow flex flex-col gap-y-[8px] overflow-y-auto">
            <Link to='/'>Inicio</Link>
            <Link to='/ingresos'>Ingresos</Link>
            <Link to='/egresos'>Egresos</Link>
        </div>
    </nav>
  )
}

export default Nav