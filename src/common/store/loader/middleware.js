import {
  disabledLoader,
  DISABLED_LOADER,
  TOGGLE_LOADER,
} from "./actions/actions";

export const loaderMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const { loader } = getState();
    if (
      loader &&
      action.type !== DISABLED_LOADER &&
      action.type !== TOGGLE_LOADER
    ) {
      dispatch(disabledLoader());
    }
    return next(action);
  };
