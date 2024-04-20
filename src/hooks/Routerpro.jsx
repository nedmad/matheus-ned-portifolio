import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Tecnologi from "../pages/Tecnologi";
import Projetos from "../pages/Projetos";



export const Routerpro = createHashRouter([
    {
        
        path:"/",
        element:<HomePage/>,
        //novo router
        children:[
            {
                path:"/tecnologia",
                element:<Tecnologi/>
            },
            {
                path:"/projetos",
                element:<Projetos/>
            }
        ]
    }
])