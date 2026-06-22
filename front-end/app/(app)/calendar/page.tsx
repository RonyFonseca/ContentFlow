"use client";
import { useState } from "react";
import Style from "./calendar.module.css";
import { useRouter } from "next/navigation";
import { Plus, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Calendar() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(new Date()); 

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const monthsNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const totalDaysInPrevMonth = new Date(year, month, 0).getDate();

  // lista de dias do mês atual
  const daysArray = [];

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    daysArray.push({
      day: totalDaysInPrevMonth - i,
      nextOrPrevMonth: true,
    });
  }

  for (let day = 1; day <= totalDaysInMonth; day++) {
    daysArray.push({
      day: day,
      nextOrPrevMonth: false,
    });
  }

  const remainingCells = 42 - daysArray.length; // 6 linhas x 7 colunas = 42 espaços
  for (let day = 1; day <= remainingCells; day++) {
    daysArray.push({
      day: day,
      nextOrPrevMonth: true,
    });
  }

  // Funções para trocar de mês nos botões
  function handlePrevMonth() {
    setCurrentDate(new Date(year, month - 1));
  }

  function handleNextMonth() {
    setCurrentDate(new Date(year, month + 1));
  }

  return (
    <div className={Style.calendarContainer}>
      <header className={Style.header}>
        <div>
          <h1 className={Style.h1}>Calendário</h1>
          <p className={Style.subtitle}>Clique em um dia e crie um novo post.</p>
        </div>
        <button 
          className={Style.newPostButton}
          onClick={() => router.push("/posts/create")}
        >
          <Plus size={20} weight="bold" />
          Novo post
        </button>
      </header>

      {/* Navegação Dinâmica */}
      <div className={Style.monthNavigation}>
        <h2>{monthsNames[month]} {year}</h2>
        <div className={Style.arrowButtons}>
          <button className={Style.arrowBtn} onClick={handlePrevMonth}>
            <CaretLeft size={20} />
          </button>
          <button className={Style.arrowBtn} onClick={handleNextMonth}>
            <CaretRight size={20} />
          </button>
        </div>
      </div>

      <div className={Style.calendarCard}>
        <div className={Style.weekDaysGrid}>
          {weekDays.map((day) => (
            <div key={day} className={Style.weekDayLabel}>{day}</div>
          ))}
        </div>

        <div className={Style.daysGrid}>
          {daysArray.map((item, index) => (
            <div 
              key={index} 
              className={`${Style.dayCell} ${item.nextOrPrevMonth ? Style.nextMonthDay : ""}`}
              onClick={() => {
                // Passa a data selecionada via URL para a tela de criação já abrir com o dia certo!
                const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(item.day).padStart(2, '0')}`;
                router.push(`/posts/create?date=${selectedDate}`);
              }}
            >
              {item.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}