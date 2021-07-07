import { LOGIN_USER } from "../actions/actions";

const DEFAULT_USER_VALUES = {
  email: "",
  token: "",
};

export default function userReducer(
  state = DEFAULT_USER_VALUES,
  { type, payload }
) {
  switch (type) {
    case LOGIN_USER:
      return payload;
    default:
      return state;
  }
}
