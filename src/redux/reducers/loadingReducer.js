import { LOADING, FULLFILLED, ERROR } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
};

const loadingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case FULLFILLED:
      return { ...state, loading: false, error: null };
    case ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
export default loadingReducer;
