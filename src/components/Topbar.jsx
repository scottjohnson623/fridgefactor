import React from 'react'
import fridgefactor from "../FearFactor1st.png";
import loginIcon from "../loginpng.png"

export default function Topbar() {
    return (
        <div className="Topbar">
            <img className="fearfactor" src={fridgefactor} />
            <img className="loginicon" src={loginIcon} />
        </div>
    )
}
