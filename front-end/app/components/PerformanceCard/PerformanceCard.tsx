import Style from "./performance.module.css";

interface DayData {
  name: string;
  percentage: string;
}

interface PerformanceCardProps {
  title: string;
  description: string;
  icon: any; 
  variant: "green" | "orange" | "red";
  days: DayData[];
  footerText: string;
}

export default function PerformanceCard({ 
  title, 
  description, 
  icon, 
  variant, 
  days, 
  footerText 
}: PerformanceCardProps) {
  return (
    <div className={`${Style.performanceCard} ${Style[variant]}`}>
      <header className={Style.cardHeader}>
        <div className={Style.iconCircle}>
          <img src={icon.src} alt={title} width={52} height={52} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </header>
      
      <ul className={Style.dayList}>
        {days.map((day, index) => (
          <li key={index}>
            <span>{index + 1} {day.name}</span>
            <span className={Style.badge}>{day.percentage}</span>
          </li>
        ))} 
      </ul>
      
      <div className={Style.footerWrapper}>
        <footer className={Style.cardFooter}>
          {footerText}
        </footer>
      </div>
    </div>
  );
}