import React from "react";
import arrow from "./images/arrow-point-to-right.png"
import me from "./images/adventureTime.png"


function GreenIntro() {
    
    return (
      <div className="container-fluid">  
        <div className="row mainSec" style={{backgroundColor: "rgb(141, 223, 18)" , padding: "150px",}}>
           <div className="col">
                <p style={{marginLeft: "35px", fontSize: "100px"}}>Welcome!</p>
            
                <p style={{marginLeft: "45px", fontSize: "50px"}}>Let me show you around 
                <img src={arrow} className="arrow" style={{maxWidth: "7%", marginLeft: "80px"}} /></p>
                
                
            </div> 
            
            <div className="col">
                <img src={me} style={{maxWidth: "80%"}} />
            </div>
        </div>
      </div>
    )


}

export default GreenIntro