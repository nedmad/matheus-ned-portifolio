import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Tecnologi from "../pages/Tecnologi";
import Projetos from "../pages/Projetos";



export const Routerpro = createHashRouter([
    {
        
        path:"/",
        element:<HomePage/>,
        children:[
            {
                path:"/matheus-ned-portifolio/tecnologia",
                element:<Tecnologi/>
            },
            {
                path:"/matheus-ned-portifolio/projetos",
                element:<Projetos/>
            }
        ]
    }
])