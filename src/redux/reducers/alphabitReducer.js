import { ALPHABIT_COCTAILS } from "../actions/types";

const initialState = {
  alphabit: [],
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case ALPHABIT_COCTAILS:
      return { ...state, alphabit: payload };
    default:
      return state;
  }
};
export default mainReducer;
