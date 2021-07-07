import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { isValidToken } from "../../common/store/user/actions/actions";
import Authorization from "../Authorization/Authorization";

export default function RouterPage() {
  const dispatch = useDispatch();
  const { user, loader } = useSelector((state) => state);
  useEffect(() => {
    dispatch(isValidToken());
  }, [dispatch]);
  return (
    <Router>
      <Route path="/">
        <Authorization />
      </Route>
    </Router>
  );
}
