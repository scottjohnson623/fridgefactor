import React from 'react';
import star from "../star.png"

export default function RecipeCard(props) {
    return (
        <div className="recipecard-wrap">
            <h3>{props.recipe.title}</h3>
                <div className="recipecontent">
                    <img className="recipeimage" src={props.recipe.thumbnail}></img>
                    <p>Ingredients: {props.recipe.ingredients}</p>
                    
                </div>
                <div>
                    <button class="buttoncard">Share</button>
                    <button class="buttoncard"><img className="star" src={star}/></button>
                    <button class="buttoncard">Made</button>
                </div>
        </div>
    )
}
