import { RouterProvider } from "react-router-dom";
import { Routerpro } from "./hooks/Routerpro";
import { ContextItems } from "./hooks/Context";

export default function App() {
  return (
    <>
      <ContextItems>
        <RouterProvider router={Routerpro} basename={"/matheus-ned-portifolio"}  />
      </ContextItems>
    </>
  );
}
