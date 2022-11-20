import "./App.css";
import { Index } from './components/index';
import { HomeNoCard } from "./components/HomePage/homePage";
import { useState } from "react";
import React from "react";

function App() {

  const [state, setState] = useState(false)
  return (
    <div>
       
       {state ? (<HomeNoCard setState = {setState}/>) : (<Index setState = {setState}/>)}
   
    </div>
  );
}

export default App;
