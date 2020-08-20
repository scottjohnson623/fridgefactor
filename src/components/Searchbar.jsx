import React, { useRef } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";


export default function Searchbar() {
    const dispatch = useDispatch();
    const ingredientSearch = useRef();
    const foodSearch = useRef()

    const searchClick = async () => {
        console.log(ingredientSearch.current.value);
        const response = await axios.get(`/recipes/${ingredientSearch.current.value}/${ingredientSearch.current.value}`)
        if (response.status === 200) {
            dispatch({ type: "SET_RECIPES", payload: response.data.results });
        }
    }

    return (
        <div className="searchbar">
            <div className="search">
                <input ref={ingredientSearch} type="text" placeholder="What do you have?"></input>
                <button className="buttoncard"> + </button>
                <input ref={foodSearch} type="text" placeholder="What do you want to make ?"></input>
                
            </div>

            <div className="buttons">
                <button className="buttoncard"> StrictMode </button>
                <button className="buttoncard" onClick={() => searchClick()}> Search ! </button>
            </div>
        </div>
    )
}
