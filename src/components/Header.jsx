import { useContext } from "react";
import { Context } from "../hooks/Context";
import me from "../../public/me.jpg"

export default function Header() {
 const {imagens,Ampliar, setAmpliar} = useContext(Context);

  
  return (
    <>
      <header>
        <div className="quemSou">
          <div className="conteudo" data-aos="zoom-in">
            <img src={me} className={Ampliar}
             onClick={(val)=> setAmpliar(val.target.className == ""?"meAmpliar":"")} alt="" />
            <div className="sobre">
              <h2>Olá, sou o Matheus Ned</h2>
              <p>
                Sou um dev Front-End. Apaixonado em aprender e conhecer novas
                tecnologias, sempre procuro novos conhecimentos para aperfeicoar
                minhas habilidades, e trabalhar com projetos desafiadores.
                Procuro evolui na area em geral, nao apenas no Front-End.
                Trabalhei no Mix mateus super mercado como CPD
                {"(Tecnologia Da Informacao)"}, por 5 meses. <strong>Tenho Habilidades com
                  html-5, css-3, design responsivo, react, sass e git-github</strong>.
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
