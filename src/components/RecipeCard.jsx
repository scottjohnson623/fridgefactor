import React from 'react';
import { useDispatch } from "react-redux";


export default function RecipeCard(props) {
    const dispatch = useDispatch();

    const shareClick = (data) => {
        dispatch({ type: "SET_SHARE_DATA", payload: data });
        dispatch({ type: "TOGGLE_SHARE"});
    }

    return (
        <div>
            <h2>{props.recipe.title}</h2>
                <div className="recipecontent">
                    <img className="recipeimage" src={props.recipe.thumbnail}></img>
                    <h3>Ingredients: {props.recipe.ingredients}</h3>
                    
                </div>
                    <button onClick={() => shareClick(props.recipe)}>Share</button>
        </div>
    )
}
