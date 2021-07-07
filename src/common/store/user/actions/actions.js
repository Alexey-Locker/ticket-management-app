import { authenticateUser, getFlights, getUser } from "../../../sdk/sdk";
import { deleteError, setError } from "../../errors/actions/actions";

export const LOGIN_USER = "LOGGIN_USER";

export function login(user) {
  return function (dispatch) {
    authenticateUser(user.email, user.password)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: LOGIN_USER, payload: data });
        if (user.checkbox) {
          localStorage.setItem("token", data.token);
        }
        dispatch(deleteError());
      })
      .catch((res) =>
        res.json().then(({ message }) => dispatch(setError(message)))
      );
  };
}

export function isValidToken() {
  return function (dispatch) {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token).then((data) => {
        dispatch({ type: LOGIN_USER, payload: { token, email: data.email } });
      });
    }
  };
}

export const SET_TIKETS = "SET_TIKETS";

export function getTikets(user) {
  return function (dispatch) {
    getFlights(user.token)
      .then((res) => res.json())
      .then(({ data }) => {
        const tickets = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        dispatch({ type: SET_TIKETS, payload: { ...user, tickets } });
      });
  };
}

export const LOGOUT_USER = "LOGOUT_USER";
export function logout() {
  localStorage.setItem("token", "");
  return function (dispatch) {
    dispatch({ type: LOGOUT_USER });
  };
}
