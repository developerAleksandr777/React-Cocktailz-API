import axios from "axios";
import {
  GET_COCKTAILS_API,
  GET_DETAILS_API,
  SEARCH_PAGE_API,
  CATEGORIES_LIST_API,
  RANDOM_COCTAILS_API,
  ALPHABIT_PAGINATION_API,
} from "../../config";
import {
  ERROR_ACTION,
  FULLFILLED_ACTION,
  LIST_COCKTAILS_ACTION,
  DETAILS_COCKTAILS_ACTION,
  LOADING_ACTION,
  LIST_SEARCHPAGE_ACTION,
  LIST_CATEGORIES_ACTION,
  RANDOM_COCTAILS_ACTION,
  ALPHABIT_COCTAILS_ACTION,
} from "./types";

export const GET_COCKTAILS_ASYNC =
  (value = "Ordinary_Drink") =>
  async (dispatch) => {
    dispatch(LOADING_ACTION());
    try {
      const res = await axios.get(GET_COCKTAILS_API + value);
      dispatch(LIST_COCKTAILS_ACTION(res.data.drinks));
      dispatch(FULLFILLED_ACTION());
    } catch (e) {
      dispatch(ERROR_ACTION(e.message));
    }
  };

export const GET_CATEGORIES_ASYNC = (value) => async (dispatch) => {
  dispatch(LOADING_ACTION());
  try {
    const res = await axios.get(CATEGORIES_LIST_API);
    dispatch(LIST_CATEGORIES_ACTION(res.data.drinks));
    dispatch(FULLFILLED_ACTION());
  } catch (e) {
    dispatch(ERROR_ACTION(e.message));
  }
};

export const GET_DETAILS_ASYNC = (id) => async (dispatch) => {
  dispatch(LOADING_ACTION());
  try {
    const res = await axios.get(
      id === "random" ? RANDOM_COCTAILS_API : GET_DETAILS_API + id
    );
    dispatch(DETAILS_COCKTAILS_ACTION(res.data.drinks[0]));
    dispatch(FULLFILLED_ACTION());
  } catch (e) {
    dispatch(ERROR_ACTION(e.message));
  }
};

export const GET_RANDOM_ASYNC = (id) => async (dispatch) => {
  dispatch(LOADING_ACTION());
  try {
    const res = await axios.get(RANDOM_COCTAILS_API);
    dispatch(RANDOM_COCTAILS_ACTION(res.data.drinks[0]));
    dispatch(FULLFILLED_ACTION());
  } catch (e) {
    dispatch(ERROR_ACTION(e.message));
  }
};

export const GET_SEARCHPAGE_ASYNC = (value) => async (dispatch) => {
  dispatch(LOADING_ACTION());
  try {
    const res = await axios.get(SEARCH_PAGE_API + value);
    dispatch(LIST_SEARCHPAGE_ACTION(res.data.drinks));
    dispatch(FULLFILLED_ACTION());
  } catch (e) {
    dispatch(ERROR_ACTION(e.message));
  }
};

export const GET_ALPHABIT_ASYNC =
  (value = "A") =>
  async (dispatch) => {
    dispatch(LOADING_ACTION());
    try {
      const res = await axios.get(ALPHABIT_PAGINATION_API + value);
      dispatch(ALPHABIT_COCTAILS_ACTION(res.data.drinks));
      dispatch(FULLFILLED_ACTION());
    } catch (e) {
      dispatch(ERROR_ACTION(e.message));
    }
  };
