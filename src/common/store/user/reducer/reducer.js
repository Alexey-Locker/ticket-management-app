import { LOGGIN_USER } from "../actions/actions";

const DEFAULT_USER_VALUES = {
  email: "",
  token: "",
};

export default function userReducer(
  state = DEFAULT_USER_VALUES,
  { type, payload }
) {
  switch (type) {
    case LOGGIN_USER:
      return payload;
    default:
      return state;
  }
}
