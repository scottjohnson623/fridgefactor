import React from 'react';


export default function RecipeCard(props) {
    return (
        <div>
            <h2>{props.recipe.title}</h2>
                <div className="recipecontent">
                    <img className="recipeimage" src={props.recipe.thumbnail}></img>
                    <h3>Ingredients: {props.recipe.ingredients}</h3>
                    
                </div>
                    <button>Share</button>
        </div>
    )
}
