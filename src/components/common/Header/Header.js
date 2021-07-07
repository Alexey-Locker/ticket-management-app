import React from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

export default function Header() {
  const { user } = useSelector((store) => store);
  return (
    <header>
      <p>Email: {user.email}</p>
    </header>
  );
}
