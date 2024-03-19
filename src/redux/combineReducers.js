import { combineReducers } from "redux";
import mainReducer from "./reducers/mainReducer";
import loadingReducer from "./reducers/loadingReducer";
import detailsReducer from "./reducers/detailsReducer";
import searchPageReducer from "./reducers/searchPageReducer";
import randomReducer from "./reducers/randomReducer";
import alphabitReducer from "./reducers/alphabitReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  loading: loadingReducer,
  details: detailsReducer,
  searchPage: searchPageReducer,
  searchValue: searchPageReducer,
  categories: mainReducer,
  random: randomReducer,
  alphabit: alphabitReducer,
});
export default rootReducer;
