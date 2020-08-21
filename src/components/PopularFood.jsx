import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "./RecipeCard";
import Share from "./Share";

export default function PopularFood() {
  const randomR = [
    {
      name: "pizza",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg",
      ingredients: "pizza base, tomato sauce, cheese, toppings",
    },
    {
      name: "burger",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg",
      ingredients: "bun, burger, cheese, salad, secret sauce",
    },
    {
      name: "pasta",
      image:
        "https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg",
      ingredients: "pasta, tomato, basil",
    },
  ];

  const dispatch = useDispatch();
  const allRecipesData = useSelector((state) => state.recipes);
  const shareToggle = useSelector((state) => state.shareToggle);
  const shareData = useSelector((state) => state.shareData);

  const getRecipesData = async () => {
    const res = await axios.get(`/recipes`);
    let data = res.data.results;
    dispatch({ type: "SET_RECIPES", payload: data });
  };
  const getStarredData = async () => {
    const res = await axios.get(`/api/starred`);
    let data = res.data;
    dispatch({ type: "SET_STARRED", payload: data });
  };
  const getMadeData = async () => {
    const res = await axios.get(`/api/made`);
    let data = res.data;
    dispatch({ type: "SET_MADE", payload: data });
  };
  useEffect(() => {
    getRecipesData();
    getStarredData();
    getMadeData();
  }, []);

  function makeRecipeCard() {
    return allRecipesData.map((recipe, i) => {
      if (i < 9) {
        return (
          <div key={i} className="recipecard">
            <RecipeCard recipe={recipe} />
          </div>
        );
      }
    });
  }

  function swapShare() {
    return (
      <>
        <div key="shareRecipeCard" className="recipecard">
          <RecipeCard recipe={shareData} />
        </div>
        <Share recipe={shareData} />
      </>
    );
  }

  return <>{shareToggle ? swapShare() : makeRecipeCard()}</>;
}
