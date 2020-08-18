import React, { useRef } from 'react'

export default function Searchbar() {
    const ingredientSearch = useRef()

    return (
        <div className="searchbar">
            <div className="search">
                <input ref={ingredientSearch} type="text"></input>

            </div>
            <div>
            <button> StrictMode </button>
            <button className="buttonsearch"> Search ! </button>
            </div>
        </div>
    )
}
