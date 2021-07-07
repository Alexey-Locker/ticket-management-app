import { TextField } from "@material-ui/core";
import React, { useMemo } from "react";
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

  const tickets = useMemo(() => {
    return !value
      ? user.tickets
      : user.tickets.filter(({ company }) => {
          const regular = new RegExp(`${value}`);
          if (regular.test(company.name)) return true;
          return company.alternativeNames.some((name) => regular.test(name));
        });
  }, [value, user]);

  return (
    <div className="main">
      <div className="main__search">
        <TextField label="Поиск" value={value} onInput={onChange} />
      </div>
      <div className="main__wrapper">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
