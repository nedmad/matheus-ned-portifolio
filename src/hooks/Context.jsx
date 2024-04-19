import { createContext } from "react";
import {
  curriculoImage,
  githubImage,
  linkedinImage,
  htmlImage,
  cssImage,
  jsImage,
  reactImage,
  sassImage,
  gitImage,
  pdf,
} from "../../public/imagens";

export const Context = createContext({});

export function ContextItems({ children }) {
  const imagens = [
    {
      id: "1",
      nome: "Curriculo",
      img: curriculoImage,
      link: pdf,
    },
    {
      id: "2",
      nome: "Github",
      img: githubImage,
      link: "https://github.com/nedmad",
    },
    {
      id: "3",
      nome: "Linkedin",
      img: linkedinImage,
      link: "https://www.linkedin.com/in/matheus-ned-barros-labre-422564237/",
    },
  ];
  const imagensTec = [
    { id: "1", img: htmlImage, nome: "html" },
    { id: "2", img: cssImage, nome: "css" },
    { id: "3", img: jsImage, nome: "js" },
    { id: "4", img: reactImage, nome: "react" },
    { id: "5", img: sassImage, nome: "sass" },
    { id: "6", img: gitImage, nome: "git" },
  ];

  const items = { imagens, imagensTec };
  return <Context.Provider value={items}>{children}</Context.Provider>;
}
