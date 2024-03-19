import { RANDOM_COCTAILS } from "../actions/types";

const initialState = {
  random: [],
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RANDOM_COCTAILS:
      return { ...state, random: payload };

    default:
      return state;
  }
};
export default mainReducer;
