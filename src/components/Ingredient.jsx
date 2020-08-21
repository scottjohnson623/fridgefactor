import React from "react";
import { useDispatch } from "react-redux";

export default function Ingredient(props) {
  const dispatch = useDispatch();

  function deleteIngredient(text) {
    dispatch({ type: "DELETE_INGREDIENT", payload: text });
  }
  return (
    <div className="ingredient" onClick={deleteIngredient(props.text)}>
      {props.text}
    </div>
  );
}
