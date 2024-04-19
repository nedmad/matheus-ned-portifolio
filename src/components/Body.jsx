import { useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Body() {
  const { pathname } = useLocation();
  const linkRef = useRef(null)
  useEffect(()=>{
    if(linkRef.current){
      linkRef.current.click();
    }
  },[])

  
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="SobreOqueFaco">
            <div className="caminho">
              <Link
                to={"/matheus-ned-portifolio/tecnologia"}
                ref={linkRef}
                className={pathname == "/tecnologia" ? "active" : ""}
              >
                <strong>Habilidades</strong>
              </Link>
              <Link
                to={"/matheus-ned-portifolio/projetos"}
                className={pathname == "/projetos" ? "active" : ""}
              >
                <strong>Projetos</strong>
              </Link>
            </div>
          </div>
          {
            pathname == "/"?"":
          <hr />

          }
          <Outlet />
        </div>
      </section>
    </>
  );
}
