import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { isValidToken } from "../../common/store/user/actions/actions";
import Authorization from "../Authorization/Authorization";
import Header from "../common/Header/Header";
import Main from "../Main/Main";

export default function RouterPage() {
  const dispatch = useDispatch();
  const { user, loader } = useSelector((state) => state);

  useEffect(() => {
    dispatch(isValidToken());
  }, [dispatch]);
  if (loader) {
    return <div>loading...</div>;
  } else if (user.token) {
    return (
      <>
        <Header />
        <Route path="/">
          <Main />
        </Route>
      </>
    );
  } else {
    return (
      <Route path="/">
        <Authorization />
      </Route>
    );
  }
}
