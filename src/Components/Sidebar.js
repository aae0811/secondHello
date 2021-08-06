import React from 'react';
import img1 from "./Assets/Group 2.png" 
import img2 from "./Assets/home.png"
import img3 from "./Assets/category.png"
import img4 from "./Assets/Union.png"
import img5 from "./Assets/group (6).png"
import img6 from "./Assets/calculator (1).png"
import img7 from "./Assets/settings.png"
import img8 from "./Assets/Ellipse 6.png"
import img9 from "./Assets/Ellipse 7.png"
import img10 from "./Assets/Ellipse 8.png"
import img11 from "./Assets/profile.png"
import img12 from "./Assets/next icon.png"
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="topbar">

                <div>
                     <img src={img1}/>
                </div>
                <div>
                    <p className="text-1">iffee</p>
                </div>
            </div>
            <div className="text-2">Menu</div>
            <div className="middlebar">
                 <div>
                     <img src={img2}/>
                 </div>
                 <div className="text-3">Home</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img3}/>
                 </div>
                 <div className="text-3">Home</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img4}/>
                 </div>
                 <div className="text-3">Service Menu</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img5}/>
                 </div>
                 <div className="text-3">Racers</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img6}/>
                 </div>
                 <div className="text-3">Calculator</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img7}/>
                 </div>
                 <div className="text-3">Settings</div>
            </div>
            <div className="text-4">Scheduled Races</div>
            <div className="middlebar">
                 <div>
                     <img src={img8}/>
                 </div>
                 <div className="text-3">MotoGP 2022</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img9}/>
                 </div>
                 <div className="text-3">Dynamics 22</div>
            </div>
            <div className="middlebar">
                 <div>
                     <img src={img10}/>
                 </div>
                 <div className="text-3">Olympics</div>
            </div>
            <div className="box">
                <div>
                    <img src={img11}/>
                </div>
                <div className="text-5">Killua</div>
                <div className="next-icon">
                    <img src={img12}/>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {};

export default Sidebar;