export const LIST_COCKTAILS = "LIST_COCKTAILS";

export const LIST_COCKTAILS_ACTION = (data) => ({
  type: LIST_COCKTAILS,
  payload: data,
});

export const LIST_CATEGORIES = "CATEGORIES";

export const LIST_CATEGORIES_ACTION = (data) => ({
  type: LIST_CATEGORIES,
  payload: data,
});

export const LIST_SEARCHPAGE = "LIST_SEARCHPAGE";

export const LIST_SEARCHPAGE_ACTION = (data) => ({
  type: LIST_SEARCHPAGE,
  payload: data,
});

export const DETAILS_COCKTAILS = "DETAILS_COCKTAILS";

export const DETAILS_COCKTAILS_ACTION = (data) => ({
  type: DETAILS_COCKTAILS,
  payload: data,
});

export const SEARCHPAGE_SEARCH = "SEARCHPAGE_SEARCH";

export const SEARCHPAGE_SEARCH_ACTION = (value) => ({
  type: SEARCHPAGE_SEARCH,
  payload: value,
});

export const CLEAR_DETAILS = "CLEAR_DETAILS";

export const CLEAR_DETAILS_ACTION = (data) => ({
  type: CLEAR_DETAILS,
  payload: data,
});

export const RANDOM_COCTAILS = "RANDOM_COCTAILS";

export const RANDOM_COCTAILS_ACTION = (data) => ({
  type: RANDOM_COCTAILS,
  payload: data,
});

export const ALPHABIT_COCTAILS = "ALPHABIT_COCTAILS";

export const ALPHABIT_COCTAILS_ACTION = (value) => ({
  type: ALPHABIT_COCTAILS,
  payload: value,
});

// loaders and errors
export const LOADING = "LOADING";
export const FULLFILLED = "FULLFILLED";
export const ERROR = "ERROR";

export const LOADING_ACTION = () => ({ type: LOADING });
export const FULLFILLED_ACTION = () => ({ type: FULLFILLED });
export const ERROR_ACTION = (error) => ({ type: ERROR, payload: error });
// loaders and errors
