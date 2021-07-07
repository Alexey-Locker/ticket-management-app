import { DISABLED_LOADER, TOGGLE_LOADER } from "../actions/actions";

export default function reducerHelpers(state = false, { type }) {
  switch (type) {
    case TOGGLE_LOADER:
      return true;
    case DISABLED_LOADER: {
      return false;
    }
    default:
      return state;
  }
}
