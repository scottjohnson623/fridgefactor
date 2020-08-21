import React from 'react';
import fridgefactor from "../FridgeFactor.png";
import loginIcon from "../loginpng.png";
import starIcon from "../StarIcon.png";
import { useDispatch } from "react-redux";

export default function Topbar() {

    const dispatch = useDispatch();
    return (
        <div className="Topbar">
            <div className="login">
                <img className="loginicon" src={loginIcon} onClick={() => dispatch({ type: "TOGGLE_LOGIN_PAGE" })}/>
                <label><b> Login/Register </b></label>
            </div>
            <img className="fearfactor" src={fridgefactor} onClick={() => dispatch({ type: "TOGGLE_MAIN_PAGE" })}/>
            
            <img className="loginicon" src={starIcon} />
            
        </div>
    )
}
