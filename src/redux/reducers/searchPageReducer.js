import { LIST_SEARCHPAGE, SEARCHPAGE_SEARCH } from "../actions/types";

const initialState = {
  data: [],
  searchValue: "",
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SEARCHPAGE:
      return { ...state, data: payload };
    case SEARCHPAGE_SEARCH:
      return { ...state, searchValue: payload };
    default:
      return state;
  }
};
export default mainReducer;
