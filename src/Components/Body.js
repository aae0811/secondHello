import React from 'react';
import Cards from "./Cards"
import Lefticon from "./Assets/Group 628.png"
import Righticon from "./Assets/Group 629.png"
import Car from "./Assets/Car.png"
import Caticon from "./Assets/cat icon.png"
import Moon from "./Assets/moon icon.png"
import Vector from "./Assets/Vector (14).png"
import FirstGraph from "./Assets/Group 607 (1).png"
import SecondGraph from "./Assets/Group 603.png"
import "./Body.css"

const Body = () => {
    return (
        <div>
             <Cards/>
             <div className="linegraph">
                 <div>
                          <div className="line">
                              <div className="text-9">Infiniti Renault</div>
                              <div className="text-10">TM</div>
                              <div className="text-11"><img src={Lefticon}/></div>
                              <div className="text-12"><img src={Righticon}/></div>
                          </div>
                          <div className="car"><img src={Car}/></div>
                 </div>
                 <div className="eldor">
                    <div className="champ">
                        <div className="cat"><img className="incat" src={Caticon}/></div>
                        <div className="after">
                            <p className="text-14">72</p>
                            <p className="text-15">Championships</p>
                        </div>
                        
                    </div>
                    <div className="champ">
                        <div className="moon"><img className="inmoon" src={Moon}/></div>
                        <div className="after">
                            <p className="text-14">32</p>
                            <p className="text-15">Skins</p>
                        </div>
                        
                    </div>
                    <div className="champ">
                        <div className="prise"><img className="inprise" src={Vector}/></div>
                        <div className="after">
                            <p className="text-14">64</p>
                            <p className="text-15">Trophies Won</p>
                        </div>
                        
                    </div>
                 </div>
             </div>
            <div className="together">
                <div className="first"><img src={FirstGraph}/></div>
                <div className="first"><img src={SecondGraph}/></div>
            </div>
        </div>
    );
};

Body.propTypes = {};

export default Body;