import React from "react";
import star from "../star.png";
import { useDispatch } from "react-redux";
import placeholder from "../placeholder.png";
import axios from 'axios';

export default function RecipeCard(props) {
  const dispatch = useDispatch();

  const shareClick = (data) => {
    dispatch({ type: "SET_SHARE_DATA", payload: data });
    dispatch({ type: "TOGGLE_SHARE" });
  };
  let imgsrc = props.recipe.thumbnail;
  if (imgsrc === "") {
    imgsrc = placeholder;
  }

  const starClick = async (data) => {
    await axios.post("`/api/starred`", data)
    dispatch({ type: "ADD_STARRED", payload: data });
  }

  const madeClick = async (data) => {
    await axios.post("`/api/made`", data)
    dispatch({ type: "ADD_MADE", payload: data });
  }

  return (
    <div>
      <a href={props.recipe.href} target="_blank">
        <div className="recipecard-wrap">
          <h3 className="recipetitle">{props.recipe.title}</h3>
          <div className="recipecontent">
            <img className="recipeimage" src={imgsrc}></img>
            <p>Ingredients: {props.recipe.ingredients}</p>
          </div>
        </div>
      </a>
      <div className="cardbutton">
        <button class="buttoncard" onClick={() => shareClick(props.recipe)}>
          Share
        </button>
        <button className="buttoncard" onClick={() => starClick(props.recipe)}>
          <img className="star" src={star} />
        </button>
        <button className="buttoncard" onClick={() => madeClick(props.recipe)}>Made</button>
      </div>
    </div>
  );
}
