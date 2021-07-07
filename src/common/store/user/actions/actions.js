import { authenticateUser, getUser } from "../../../sdk/sdk";

export const LOGIN_USER = "LOGGIN_USER";

export function login(user) {
  return function (dispatch) {
    authenticateUser(user.email, user.password)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: LOGIN_USER, payload: data });
        console.log(data);
        if (user.checkbox) {
          localStorage.setItem("token", data.token);
        }
      });
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
