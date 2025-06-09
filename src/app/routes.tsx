import { createBrowserRouter } from "react-router-dom";
import { Inicio, Ingresos, Egresos, Root } from './modul';

const routes = createBrowserRouter([
    {
        path: '/', 
        Component: Root, 
        children: [
            {index: true, Component: Inicio},
            {path: '/ingresos', Component: Ingresos},
            {path: '/egresos', Component: Egresos},
        ]
    }
])

export default routes