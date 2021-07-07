import React from "react";
import "./Ticket.scss";
import image from "./images/image.jpg";
export default function Ticket({ ticket }) {
  return (
    <div className="main__ticket ticket">
      <div className="ticket__header">
        <p>Авиакомпания: {ticket.company.name}</p>
      </div>
      <img src={image} alt="Поезда" />
      <p>Дата вылета: {ticket.date}</p>
    </div>
  );
}
