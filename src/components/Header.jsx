import { useContext } from "react";
import { Context } from "../hooks/Context";
import {me} from "../../public/imagens"
import {fundo} from "../../public/imagens"

export default function Header() {
 const {imagens} = useContext(Context);

  
  return (
    <>
      <header style={{backgroundImage:`url(${fundo})`}}>
        <div className="quemSou">
          <div className="conteudo" data-aos="zoom-in">
            <img src={me} alt="" />
            <div className="sobre">
              <h2>Olá, sou o Matheus Ned</h2>
              <p>
                Sou um dev Front-End. Apaixonado em aprender e conhecer novas
                tecnologias, sempre procuro novos conhecimentos para aperfeiçoar
                minhas habilidades, e trabalhar com projetos desafiadores.
                Procuro evoluir na área, em geral, não apenas no Front-End. <strong>Tenho Habilidades com
                  html-5, css-3, design responsivo, react, sass, bootstrap e git-github</strong>.
              </p>
            </div>
          </div>
          <div className="maisInfo"  data-aos="zoom-in">
            {
              imagens.map((val) => (
                <a href={val.link} 
                key={val.id} 
                className="infoMe"
                target="_blank"
                style={{backgroundImage:`url(${val.img})`}}
                ></a >

              ))
            }
          </div>
        </div>
      </header>
    </>
  );
}
