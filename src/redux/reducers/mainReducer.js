import { LIST_COCKTAILS, LIST_CATEGORIES } from "../actions/types";

const initialState = {
  data: [],
  categories: [],
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_COCKTAILS:
      return { ...state, data: payload };
    case LIST_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
