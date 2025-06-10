import Layout from "@/layouts/Layout";
import { Inicio, Ingresos, Egresos } from './modul';
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout, 
        children: [
            {index: true, Component: Inicio},
            {path: '/ingresos', Component: Ingresos},
            {path: '/egresos', Component: Egresos},
        ]
    }
])

export default routes