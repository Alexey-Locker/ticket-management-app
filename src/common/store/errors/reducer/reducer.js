import { DELETE_ERRORS, SET_ERRORS } from "../actions/actions";

export default function errorsReducer(state = "", { payload, type }) {
  switch (type) {
    case SET_ERRORS:
      return payload;
    case DELETE_ERRORS:
      return "";
    default:
      return state;
  }
}
