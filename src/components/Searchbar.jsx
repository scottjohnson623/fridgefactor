import React, { useRef } from 'react'

export default function Searchbar() {
    const ingredientSearch = useRef();
    const foodSearch = useRef()

    return (
        <div className="searchbar">
            <div className="search">
                <input ref={ingredientSearch} type="text" placeholder="What do you have?"></input>
                <button className="buttoncard"> + </button>
                <input ref={foodSearch} type="text" placeholder="What do you want to make ?"></input>
                
            </div>

            <div className="buttons">
                <button className="buttoncard"> StrictMode </button>
                <button className="buttoncard"> Search ! </button>
            </div>
        </div>
    )
}
