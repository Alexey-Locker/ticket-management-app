import { LOGIN_USER, SET_TIKETS } from "../actions/actions";

const DEFAULT_USER_VALUES = {
  email: "",
  tickets: [],
  token: "",
};

export default function userReducer(
  state = DEFAULT_USER_VALUES,
  { type, payload }
) {
  switch (type) {
    case LOGIN_USER:
      return { ...state, ...payload };
    case SET_TIKETS:
      return { ...state, ...payload };
    default:
      return state;
  }
}
