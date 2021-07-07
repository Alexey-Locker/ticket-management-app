import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTikets } from "../../common/store/user/actions/actions";
import "./Main.scss";
import Ticket from "./Ticket/Ticket";

export default function Main() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getTikets(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onChange = ({ target }) => setValue(target.value);
  return (
    <div className="main">
      <div className="main__search">
        <input onChange={onChange} value={value} />
      </div>
      <div className="main__wrapper">
        {user.tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
