export const SET_ERRORS = "SET_ERRORS";

export const DELETE_ERRORS = "DELETE_ERRORS";

export function setError(error) {
  return function (dispatch) {
    dispatch({ type: SET_ERRORS, payload: error });
  };
}
export function deleteError() {
  return function (dispatch) {
    dispatch({ type: DELETE_ERRORS });
  };
}
