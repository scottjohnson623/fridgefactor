import React from 'react'

export default function PopularFood() {
    const randomR = [{name: "Pizza", image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg", ingredients: "pizza base, tomato sauce, cheese, toppings" },{name: "Burger" , image:"https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg", ingredients: "bun, burger, cheese, salad, secret sauce" },{name: "Pasta", image:"https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg", ingredients: "pasta, tomato, basil" }]
    return (
        randomR.map(recipe => {
            return (
            <div className="popular">
                <h1>{recipe.name}</h1>
                <div className="popcard">
                    <img className="popimage" src={recipe.image}></img>
                    <h3>Ingredients: {recipe.ingredients}</h3>
                </div>
        </div>
        )})
    )
}
