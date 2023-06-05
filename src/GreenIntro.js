import React from "react";
import arrow from "./images/arrow-point-to-right.png"
import me from "./images/adventureTime.png"


function GreenIntro() {
    
    return (
      <div className="container-fluid">  
        <div className="row mainSec" style={{backgroundColor: "rgb(141, 223, 18)" , padding: "150px", marginTop: "100px", height: "920px"}} id="Home">
           <div className="col">
                <p className="welc" style={{marginLeft: "35px", fontSize: "85px", paddingBottom: "0"}}>Welcome!</p>

                <a href="#About" className="arrow-trans">
                <p style={{marginLeft: "45px", fontSize: "60px", paddingTop: "0"}}>Let me show you around 
                <img alt="arrow point toward animation of the website developer" src={arrow} className="arrow" style={{maxWidth: "10%", marginLeft: "80px"}} /></p>
                </a>
                
            </div> 
            
            <div className="col">
                <img alt="animation of the website developer" src={me} style={{maxWidth: "80%"}} />
            </div>
        </div>
      </div>
    )


}

export default GreenIntro