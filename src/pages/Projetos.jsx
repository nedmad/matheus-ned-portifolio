import { infolibre } from "../../public/imagens";

export default function Projetos() {
  return (
    <>
      <div className="project">
        <div className="cart" data-aos="fade-down">
          <div
            className="imageProject"
            style={{ backgroundImage: `url(${infolibre})` }}
          ></div>
          <div className="conteudoProject">
            <h3>Infolibre markert</h3>
            <p>
              Um projeto feito por mim, com o objetivo de vender produtos e
              infoprodutos afiliados. Site construído com react, sass e
              bootstrap.
            </p>
            <button className="btn bt-primary">
              <a href="https://nedmad.github.io/infolibre/" target="_blank">
                Visitar site
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
