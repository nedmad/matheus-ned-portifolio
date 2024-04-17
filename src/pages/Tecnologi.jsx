import { useContext } from "react";
import { Context } from "../hooks/Context";

export default function Tecnologi() {
 const {imagensTec} = useContext(Context)
  return (
    <>
      <div className="tec" data-aos="fade-down">
        <div className="tecUdo">
          {imagensTec.map((val) => (
            <div className="frames" key={val.id}>
                <strong>{val.nome}</strong>
              <div
                className="imagem"
                style={{ backgroundImage: `url(${val.img})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
