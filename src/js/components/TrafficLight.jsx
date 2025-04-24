import React, { useState } from "react";

const TrafficLight = () => {

    //Desestructuracion datos
    let [color,setColor] = useState("");


    return (
        <div>
            <div className="contenedor">
                <div className="soporte">
                </div> 
            </div>
            <div className="contenedor">
                <div className="traffic-light">
                    <div onClick={()=>setColor("red")} className={"light red " + (color == "red" ? "glow" : "")}></div>
                    <div onClick={()=>setColor("yellow")} className={"light yellow " + (color == "yellow" ? "glow" : "")}></div>
                    <div onClick={()=>setColor("green")} className={"light green " + (color == "green" ? "glow" : "")}></div>
                </div>
            </div>
           
        </div>
        
    )
}

export default TrafficLight;