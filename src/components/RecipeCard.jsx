import React from 'react';
import star from "../star.png"
import { useDispatch } from "react-redux";


export default function RecipeCard(props) {
    const dispatch = useDispatch();

    const shareClick = (data) => {
        dispatch({ type: "SET_SHARE_DATA", payload: data });
        dispatch({ type: "TOGGLE_SHARE"});
    }

    return (
        <div>

        <a href={props.recipe.href} target="_blank">
        <div className="recipecard-wrap" onclick>
            <h3>{props.recipe.title}</h3>
                <div className="recipecontent">
                    <img className="recipeimage" src={props.recipe.thumbnail}></img>
                    <p>Ingredients: {props.recipe.ingredients}</p>
                    
                </div>
        </div>
        </a>
                <div>
                    <button class ="buttoncard" onClick={() => shareClick(props.recipe)}>Share</button>
                    <button class="buttoncard"><img className="star" src={star}/></button>
                    <button class="buttoncard">Made</button>
                </div>
        </div>
    )
}
