import { useState, useEffect } from "react";
import "./App.css";
import TitleOfProyect from "./components/titles/titleHone";
import Head from "./components/head/Head";
import TextArea from "./components/textArea/textArea";
import Previewer from "./components/preview/Preview";
import { sampleText } from "./sampleText";

function App() {

  const [ currenTab, setCurrenTab] = useState("editor")
  const [ currentCode, setCurrenCode ] = useState(sampleText)

  useEffect(() => {
    console.log("✨", currenTab);
    console.log("✨", currentCode);
  }, [currenTab])

  return (
    <>
      <TitleOfProyect
      title="Build a Markdown Previewer"
      />
      <div className={``}>
        <Head 
        setTab={(tab) =>{
          setCurrenTab(tab)
        }}
        />
        <div className="">
          <div className={`${ currenTab !== 'editor' && 'hidden'} landscape:block landscape:w-[50vw]`}>
            <TextArea 
            setcode={(code) => {
              setCurrenCode(code)
            }}
            />
          </div>
          <div className={`${ currenTab !== 'Previewer' && 'hidden'} landscape:block`}>
            <Previewer code={currentCode}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
