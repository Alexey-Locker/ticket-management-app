import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../common/store/user/actions/actions";
import "./Header.scss";

export default function Header() {
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();

  const onClick = () => dispatch(logout());

  return (
    <header>
      <p>Email: {user.email}</p>
      <p onClick={onClick}> Выйти </p>
    </header>
  );
}
