function PageHome() {
  return (
    <>
    <section className="m-10">
        <div className="max-w-screen-md m-0 box-border">
          <div className="">
            <h2 className="my-6 text-lg leading-7 text-slate-200 font-bold">
              El lenguaje JavaScript
            </h2>
          </div>
          <div className="max-w-3xl my-6 text-sm text-slate-300 font-medium">
            <p>
            Aquí aprenderemos JavaScript, empezando desde cero y llegaremos
            hasta conceptos avanzados como POO. Nos concentraremos en el
            lenguaje mismo con el mínimo de notas específicas del entorno.
            </p>
          </div>
          <div className="list ">
            <div className="list_item list-none">
              <div className="list_title relative font-bold text-base mb-4">
                <a className="list_link text-slate-100">Una introduccion</a>
              </div>
              <ul className="list-sub grid-cols-3 p-0 m-0 mb-6 list-none gap-x-2.5">
                  <li className="list-sub__item m-0 flex">
                    <div className="list-sub__title relative pl-9 mb-0.5 ">
                      <span className="absolute top-1 left-1 text-xs">1.1</span>
                      <a className="list-sub__link text-sm ">Unaintoruccion a JavaScript</a>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageHome