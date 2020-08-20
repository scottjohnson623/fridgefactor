import React, { useRef } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";


export default function RecipeCard(props) {
    const dispatch = useDispatch();
    const toInput = useRef();
    const fromInput = useRef();
    
    const shareClick = async () => {
        // let payload={
        //     "body": `Here is your recipe ${props.recipe.href}`,
        //     "to": toInput.current.value,
        //     "subject": "Your Recipe from Fridge Factor",
        //     "from": fromInput.current.value
        // };
        // const response = await axios.post("/share", payload);
        // console.log(response);
        dispatch({ type: "TOGGLE_SHARE"});
    }

    return (
        <div>
            <input ref={toInput} type="text" placeholder="Enter Email - Who would you like to send to?"></input>
            <input ref={fromInput} type="text" placeholder="Enter YOUR email address"></input>
            <button onClick={() => shareClick()}>Email Recipe</button>
        </div>
    )
}