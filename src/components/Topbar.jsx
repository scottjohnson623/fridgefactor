import React from 'react';
import fridgefactor from "../FridgeFactor.png";
import loginIcon from "../loginpng.png";
import starIcon from "../StarIcon.png";

export default function Topbar() {
    return (
        <div className="Topbar">
            <div className="login">
                <img className="loginicon" src={loginIcon} />
                <label><b> Login/Register </b></label>
            </div>
            <img className="fearfactor" src={fridgefactor} />
            
            <img className="loginicon" src={starIcon} />
            
        </div>
    )
}
