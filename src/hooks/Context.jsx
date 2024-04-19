import { createContext, useState } from "react";
import curriculoImage from "../../public/curriculo.png"
import githubImage from "../../public/github-mark.png";
import linkedinImage from "../../public/linkedin.png";
import htmlImage from "../../public/html.png";
import cssImage from "../../public/css.png";
import jsImage from "../../public/js.png";
import reactImage from "../../public/react.png";
import sassImage from "../../public/sass.png";
import gitImage from "../../public/git.png";

import pdf from "../../public/curriculo.pdf";

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
  const [Ampliar, setAmpliar] = useState("");
  
  const items = { imagens, imagensTec, Ampliar, setAmpliar};
  return <Context.Provider value={items}>{children}</Context.Provider>;
}
