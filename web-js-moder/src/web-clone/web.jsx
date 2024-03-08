import { useState } from "react";
import Navbar from "../components/nav/nav";
import FooterMain from "../components/footer/footer";
import SideNavar from "../components/sidenava/SideNav";
import PageHome from "../pages/home/home";
import { namesNavar } from "../utilities";

function WebClone() {
  // Menu Nav/ SideNav
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <Navbar toggleSideNav={toggleSideNav} />
      <SideNavar isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <div className="text-justify text-neutral-600 dark:text-neutral-200 m-10">
        <h3 className="text-4xl font-bold mb-4">
          El Tutorial de JavaScript Moderno
        </h3>
        <p className="text-neutral-400">
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
        <h5 className="text-xl font-bold text-neutral-500 dark:text-neutral-400 mb-7">
          Tabla de contenidos
        </h5>
        <p className="text-neutral-400">
          El curso principal contiene 2 partes que cubren JavaScript como
          lenguaje de programación y el trabajo con un navegador. También hay
          series adicionales de artículos temáticos.
        </p>
        <div className="flex justify-between flex-auto gap-8 mt-8">
          {namesNavar.map((nav, index) => (
            <div key={index}>
              <a className="">
                <h5 className="text-lg font-bold mb-2">{nav.nav}</h5>
                <p className="text-base font-bold text-neutral-500 dark:text-neutral-400 mb-4">
                  {nav.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <PageHome/>
      {/* <FooterMain /> */}
    </>
  );
}

export default WebClone;
