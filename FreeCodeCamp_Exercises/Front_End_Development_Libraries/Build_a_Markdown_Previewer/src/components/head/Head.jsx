import { useState } from "react";
import PropTypes from 'prop-types'
function Head({ setTab }) {
  const [currenTab, setCurrenTab] = useState("editor")

  return(
    <div className="fixed w-full h-10 flex items-center justify-between px-3 bg-moon-base text-moon-text landscape:justify-around">
      <h2 className="font-bold m-0 border-none landscape:hidden">{currenTab}</h2>
      <button
      className="landscape:hidden"
      type="button"
      onClick={() =>{
        if (currenTab === "editor") {
          setCurrenTab("Previewer")
          setTab("Previewer")
        }else {
          setCurrenTab("editor")
          setTab("editor")
        }
      }}
      >
        <i 
        className={`text-2xl nf nf-md-toggle_switch${currenTab === "editor" ? "_off" : ''}`} 
        />
      </button>
      <h2 className="font-bold m-0 border-none hidden landscape:block">Editor</h2>
      <h2 className="font-bold m-0 border-none hidden landscape:block">Previewer</h2>

    </div>
  )}

  export default Head;

  Head.propTypes = {
    setTab: PropTypes.any.isRequired
  }