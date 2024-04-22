import { infolibre } from "../../public/imagens"

export default function Projetos() {
    return (
        <>
            <div className="project">
                <div className="cart" data-aos="fade-down">
                    <div className="imageProject" style={{backgroundImage:`url(${infolibre})`}}></div>
                    <div className="conteudoProject">
                        <h3>Infolibre markert</h3>
                       <p>
                        Um projeto feito por min, com o objeivo de vender produtos e infoprodutos afiliados.
                        Site construído com react, sass e bootstrap.
                       </p>
                        <button className="btn bt-primary">Visitar site</button>
                    </div>
                </div>
            </div>
        </>
    )
}