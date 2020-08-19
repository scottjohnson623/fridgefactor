import { createStore } from "redux";

const intialState = {
  recipes: [],
  starred: [],
  made: [],
  ingredients: [],
  food: "",
  text: "",
  strict: false,
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };
    case "SET_STARRED":
      return { ...state, starred: action.payload };
    case "SET_MADE":
      return { ...state, made: action.payload };
    case "SET_INGREDIENTS":
      return { ...state, ingredients: action.payload };
    case "SET_FOOD":
      return { ...state, food: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };

    case "TOGGLE_STRICT":
      return { ...state, strict: !state.strict };
    case "TOGGLE_LOADING":
      return { ...state, loading: !state.loading };

    case "ADD_STARRED":
      return { ...state, starred: [...state.starred, action.payload] };
    case "ADD_MADE":
      return { ...state, made: [...state.made, action.payload] };
    case "ADD_INGREDIENTS":
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

export default store;
