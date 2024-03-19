import { DETAILS_COCKTAILS, CLEAR_DETAILS } from "../actions/types";

const initialState = {
  data: {},
};

const detailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DETAILS_COCKTAILS:
      return { ...state, data: payload };
    case CLEAR_DETAILS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
export default detailsReducer;
