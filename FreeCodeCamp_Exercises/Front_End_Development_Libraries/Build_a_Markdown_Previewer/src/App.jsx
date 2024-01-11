import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Example from "./components/example/example";
import TextArea from "./components/textArea/textArea";

function App() {
  return (
    <>
        {/* <Example/> */}
        <TextArea
        text="Hola"
        />
    </>
  );
}

export default App;
