import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Tecnologi from "../pages/Tecnologi";
import Projetos from "../pages/Projetos";



export const Routerpro = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
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