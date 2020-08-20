import React from 'react';
import fridgefactor from "../FridgeFactor.png";
import loginIcon from "../loginpng.png";
import starIcon from "../StarIcon.png";

export default function Topbar() {
    return (
        <div className="Topbar">
            <img className="loginicon" src={loginIcon} />
            <img className="fearfactor" src={fridgefactor} />
            <img className="loginicon" src={starIcon} />
        </div>
    )
}
