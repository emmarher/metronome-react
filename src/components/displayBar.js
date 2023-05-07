import React from 'react'

const DisplayBar = () => {
    let circleOff = {
        border: "solid red 4px",
        borderRadius: "10px",
        //margin: "auto",
        height: "10px",
        width: "10px",
       
    }
    let circleOn = {
        border: "solid green 4px",
        borderRadius: "10px",
        //margin: "auto",
        height: "10px",
        width: "10px",
       
    }
    let wrapper = {  
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        justifyItems: "center",
        width: "120px"}
  return (
    <div>
        <div style={wrapper}>
            <div style={circleOff}>
            </div>
            
            <div style={circleOn}>
            </div>
            <div style={circleOff}>
            </div>
            <div style={circleOff}>
            </div>
        </div>
      
    </div>
  )
}

export default DisplayBar
