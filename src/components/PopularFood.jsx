import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "./RecipeCard"

export default function PopularFood() {
    const randomR = [{name: "pizza", image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg", ingredients: "pizza base, tomato sauce, cheese, toppings" },{name: "burger" , image:"https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg", ingredients: "bun, burger, cheese, salad, secret sauce" },{name: "pasta", image:"https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg", ingredients: "pasta, tomato, basil" }]
    
    const dispatch = useDispatch();
    const allRecipesData = useSelector(state => state.recipes)

    const getRecipesData = async () => {
        const res = await axios.get(`/recipes`);
        let data = res.data.results
        dispatch({ type: "SET_RECIPES", payload: data });
    }
    const getStarredData = async () => {
        const res = await axios.get(`/api/starred`);
        let data = res.data;
        dispatch({ type: "SET_STARRED", payload: data });
    }
    const getMadeData = async () => {
        const res = await axios.get(`/api/made`);
        let data = res.data;
        dispatch({ type: "SET_MADE", payload: data });
    }
    useEffect(() => {
        getRecipesData();
        getStarredData();
        getMadeData();
    
        console.log(allRecipesData);
    }, [])

    function makeRecipeCard() {
        console.log(allRecipesData)
         return allRecipesData.map((recipe, i) => {
            return (
                <div key={i} className="recipecard">
            <RecipeCard recipe={recipe} />
        </div>
    
    )}) 
    }
    
    return (
            <>
           {makeRecipeCard()}
        </>
        )
    
}
