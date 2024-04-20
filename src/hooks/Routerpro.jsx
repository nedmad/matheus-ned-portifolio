import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Tecnologi from "../pages/Tecnologi";
import Projetos from "../pages/Projetos";



export const Routerpro = createBrowserRouter([
    {
        path:"/matheus-ned-portifolio",
        element:<HomePage/>,
        children:[
            {
                path:"/matheus-ned-portifolio/tecnologia",
                element:<Tecnologi/>
            },
            {
                path:"/matheus-ned-portifolio/projetos",
                element:<Projetos/>
            },
            
        ]
    },
    { basename: import.meta.env.DEV ? '/' : '/matheus-ned-portifolio/' }
])