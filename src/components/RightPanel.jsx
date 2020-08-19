import React from 'react'

export default function RightPanel() {
    const randomR = [{name: "Pizza", image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg", ingredients: "pizza base, tomato sauce, cheese, toppings" },{name: "Burger" , image:"https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg", ingredients: "bun, burger, cheese, salad, secret sauce" },{name: "Pasta", image:"https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg", ingredients: "pasta, tomato, basil" }];

    return (
        <div className="rightpanel">
            <h1>Starred Recipes</h1>
        {randomR.map((recipe, i) => {
            if (i % 2 === 0) {
                return(
                    <div className="eggboxR">
                    <img className="eggimage" src={recipe.image}></img>
                    <h3>{recipe.name}</h3>
                </div>
                )
            }
            return(
                <div className="eggboxL">
                    <img className="eggimage" src={recipe.image}></img>
                    <h3>{recipe.name}</h3>
                </div>
            )
        })}
        </div>
    )
}
