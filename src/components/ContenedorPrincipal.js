//import React from 'react'
import { useState, useEffect } from "react";
import BotonStart from './BotonStart';
import DisplayBar from "./displayBar";
const ContenedorPrincipal = () => {
  const [bpm, setBpm] = useState(60);
  const [ms, setMs] = useState(1000);
  const [corch, setCorch] = useState(1);
  const [displayCorch, setDC] = useState('1/4');

  useEffect(()=>{
    console.log('Efect....');
    newBPM(bpm);
  });

    let containerStyle = {
      fontFamily: 'Arial',
      fontSize: "1rem",
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#292b2c",
      backgroundColor: "#fff",
      padding: "0 2em",
      width: "60%",
      borderRadius:"10px"
    }
    //1/4: 1, 1/8:2, 1/8 T : 3
   // setInterval

    //let bpm = 100;
    const newBPM = (newValue) =>{
      console.log('El valor cambio a..', newValue);
      //bpm = Number(newValue);
      let _t = Number(newValue);
      setBpm(_t);
      //setMs((60000 /_t));
      calculateMS(_t);
    }
    const adjustCorch = (b, bs) =>{
      //b = bpm, bs = corchea string
      setCorch(b);
      setDC(bs);
    }

    const handleChange = (e) =>{
      //console.log(e.target.defaultValue);
      setCorch(Number(e.target.defaultValue));
      //newBPM(bpm);
    }
    
     function calculateMS (bpmIn){
      let _t = ((60000 /bpmIn)/corch).toFixed(3)
      setMs(Number(_t));
    }


  return (
    <div style={containerStyle}>
      <h2> {bpm} BPM = {ms} seg.</h2>
      
      <h3> - <input type="range" min="1" max="100"  id="myRange" onChange={e => newBPM(e.target.value)}/> +</h3>

      
      <BotonStart/>
      <input type="radio" value="1" checked={corch === 1}
              onChange={e => handleChange(e)} name="corchea"/>
      <label >1/4</label>
      <input type="radio" value="2" 
              onChange={e => handleChange(e)} name="corchea"/>
      <label >1/8</label>
      <input type="radio" value="3" 
              onChange={e => handleChange(e)} name="corchea"/>
      <label >1/8T</label>

      <DisplayBar/>
   
    </div>

    
  )
}

export default ContenedorPrincipal
