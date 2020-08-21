import React from "react";
import { useSelector } from "react-redux";
import placeholder from "../placeholder.png";

export default function RightPanel() {
  const starredR = useSelector((state) => {
    return state.starred;
  });
  function makeStars() {
    return starredR.map((recipe, i) => {
      let imgsrc = recipe.thumbnail;
      if (imgsrc === "") {
        imgsrc = placeholder;
      }
      if (i % 2 === 0) {
        return (
          <a href={recipe.href} target="_blank">
            <div className="eggboxR">
              <img className="eggimage" src={imgsrc}></img>
              <label className="recipename">{recipe.title}</label>
            </div>
          </a>
        );
      }
      return (
        <a href={recipe.href} target="_blank">
          <div className="eggboxL">
            <img className="eggimage" src={imgsrc}></img>
            <label className="recipename">{recipe.title}</label>
          </div>
        </a>
      );
    });
  }
  {
  }
  return (
    <div className="rightpanel">
      <div className="starred">
        <h1>Starred Recipes</h1>
        {makeStars()}
      </div>
    </div>
  );
}
