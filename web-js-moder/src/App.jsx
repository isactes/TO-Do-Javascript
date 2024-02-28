import { useState } from "react";
import Navbar from "./components/nav/nav";
import FooterMain from "./components/footer/footer";
import "./App.css";
import SideNavar from "./components/sidenava/SideNav";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };


  return (
    <>
      <Navbar toggleSideNav={toggleSideNav}/>
      <SideNavar  isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav}/>
      <div className="">
        <h1>Tutorial de JavaScript Moderno</h1>
        <h3>Tabla de contenidos</h3>
        <p>
          Por supuesto. Estoy emocionado de integrar todos los ejercicios
          disponibles en https://es.javascript.info/ en esta página que voy a
          estar realziando. Desde los fundamentos básicos hasta los conceptos
          más avanzados, cada desafío será una oportunidad para expandir mi
          conocimiento sobre JavaScript y fortalecer mis habilidades de
          programación web. Estoy convencido de que esta experiencia será
          enriquecedora tanto para nosotros como para nuestros usuarios, y nos
          ayudará a ofrecer una experiencia web más dinámica y funcional. ¡Vamos
          a por ello juntos!
        </p>
      </div>
      <FooterMain/>
    </>
  );
}

export default App;
