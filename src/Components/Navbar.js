import React from 'react';
import ringer from "./Assets/notification.png"
import person from "./Assets/person.png"
import people from "./Assets/Ellipse 3.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navber">
            <div>
                <input className="search-1" type="text" placeholder="Search for a race, car or racer"></input>
            </div>
            <div>
                <select className="search-2">
                    <option>Choose a car</option>
                    <option>Range rower</option>
                    <option>Mersades Bens</option>
                    <option>Hyundai</option>
                </select>
            </div>
            <div className="navber-right">
                <img src={ringer}/>
            </div>
            <div className="navber-right">
                <img src={person}/>
            </div>
            <div className="navber-right">
                <img src={people}/>
            </div>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;