"use client";
import Style from "./calendar.module.css";
export default function Calendar() {
  return (
    <div>
      <header>
        <h1 className={Style.h1}>Calendário</h1>
        <p>Clique em um dia e crie um novo post.</p>
      </header>
    </div>
  );
}