import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

export default function PopularFood() {
    const randomR = [{name: "pizza", image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg", ingredients: "pizza base, tomato sauce, cheese, toppings" },{name: "burger" , image:"https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg", ingredients: "bun, burger, cheese, salad, secret sauce" },{name: "pasta", image:"https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg", ingredients: "pasta, tomato, basil" }]
    
    const dispatch = useDispatch();
    const allRecipesData = useSelector(state => state.recipes)

    const getRecipesData = async () => {
        const res = await axios.get(`/recipes`);
        let data = res.data.results
        return data;
    }
    const getStarredData = async () => {
        const res = await axios.get(`/api/starred`);
        let data = res.data;
        return data;
    }
    const getMadeData = async () => {
        const res = await axios.get(`/api/made`);
        let data = res.data;
        return data;
    }
    useEffect(() => {
        const recipesData = getRecipesData();
        const starredData = getStarredData();
        const madeData = getMadeData();
        dispatch({ type: "SET_RECIPES", payload: recipesData });
        dispatch({ type: "SET_STARRED", payload: starredData });
        dispatch({ type: "SET_MADE", payload: madeData });
    }, [])
    
    return (
        randomR.map(recipe => {
            return (
            <div className="popular">
                <label>{recipe.name}</label>
                <div className="popcard">
                    <img className="popimage" src={recipe.image}></img>
                    <h3>Ingredients: {recipe.ingredients}</h3>
                </div>
        </div>
        )})
    )
}
