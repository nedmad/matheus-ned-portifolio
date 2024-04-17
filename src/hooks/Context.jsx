import { createContext, useState } from "react";

export const Context = createContext({});

export function ContextItems({ children }) {
  const imagens = [
    {
      id: "1",
      nome: "Curriculo",
      img: "../../public/curriculo.png",
      link: "../../public/curriculo.pdf",
    },
    {
      id: "2",
      nome: "Github",
      img: "../../public/github-mark.png",
      link: "https://github.com/nedmad",
    },
    {
      id: "3",
      nome: "Linkedin",
      img: "../../public/linkedin.png",
      link: "https://www.linkedin.com/in/matheus-ned-barros-labre-422564237/",
    },
  ];
  const imagensTec = [
    { id: "1", img: "../../public/html.png", nome: "html" },
    { id: "2", img: "../../public/css.png", nome: "css" },
    { id: "3", img: "../../public/js.png", nome: "js" },
    { id: "4", img: "../../public/react.png", nome: "react" },
    { id: "5", img: "../../public/sass.png", nome: "sass" },
    { id: "6", img: "../../public/git.png", nome: "git" },
  ];
  const [Ampliar, setAmpliar] = useState("");
  
  const items = { imagens, imagensTec, Ampliar, setAmpliar};
  return <Context.Provider value={items}>{children}</Context.Provider>;
}
