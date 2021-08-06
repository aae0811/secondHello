import React from 'react';
import img1 from "./Assets/Group (7).png"
import "./Cards.css"

const Cards = (props) => {
    return (
        <div className="cards">
            <div className="card">
                <div className="text-6">
                    <img src={img1}/>
                </div>
                <div className="text-7">Start</div>
            </div>
            <div className="card">
                <div className="text-6">
                    <img src={img1}/>
                </div>
                <div className="text-7">Start</div>
            </div>
            <div className="card">
                <div className="text-6">
                    <img src={img1}/>
                </div>
                <div className="text-7">Start</div>
            </div>
            <div className="card">
                <div className="text-6">
                    <img src={img1}/>
                </div>
                <div className="text-7">Start</div>
            </div>
            <div className="card">
                <div className="text-6">
                    <img src={img1}/>
                </div>
                <div className="text-7">Start</div>
            </div>
            <div className="card">
                <div className="text-6">
                    <img src={img1}/>
                </div>
                <div className="text-7">Start</div>
            </div>
        </div>
    );
};

Cards.propTypes = {};

export default Cards;