"use client";
import Style from "./dashboard.module.css";
import Card from "../../components/Card/card";
import PerformanceCard from "../../components/PerformanceCard/PerformanceCard";

import Note from '../../../public/Note.svg';
import Check from '../../../public/check.svg';
import Clock from '../../../public/clock.svg';
import Magic from '../../../public/magic.svg';

import Flame from '../../../public/Icons-desempenho-verde.svg';
import Scales from '../../../public/Icons-desempenho-laranja.svg';
import ChartLineDown from '../../../public/Icons-desempenho-vermelho.svg';


export default function Dashboard() {

  return (
    <div id={Style.dashboard}>

      <main className={Style.main}>
        <header className={Style.header}>
          <h1 className={Style.title}>Dashboard</h1>
        </header>

        <section className={Style.cardsContainer}> 
          <Card quantidade={12} description="Posts planejados" icon={Note} />
          <Card quantidade={5} description="Posts postados" icon={Check} />
          <Card quantidade={8} description="Posts pendentes" icon={Clock} />
          <Card quantidade={3} description="Posts em produção" icon={Magic} />
        </section>

        <div className={Style.performanceContainer}>
          <section className={Style.performanceSection}>
          <h2>Desempenho por dia da semana</h2>
          <p className={Style.legend}>Veja os dias da semana com melhor e pior desempenho.</p>

          <div className={Style.performanceGrid}>
            <PerformanceCard 
              variant="green"
              title="Mais alcançados"
              description="Dias com maior alcance médio"
              icon={Flame} 
              footerText="Seus posts têm um melhor desempenho nesses dias."
              days={[
                { name: "Quarta-feira", percentage: "+35%" },
                { name: "Quinta-feira", percentage: "+28%" }
              ]}
            />

            <PerformanceCard 
              variant="orange"
              title="Alcance médio"
              description="Dias com alcance dentro da média"
              icon={Scales} 
              footerText="Bom desempenho! Há espaço para crescer."
              days={[
                { name: "Segunda-feira", percentage: "+5%" },
                { name: "Sábado", percentage: "+3%" }
              ]}
            />

            <PerformanceCard 
              variant="red"
              title="Menos alcançados"
              description="Dias com menor alcance médio dos seus post"
              icon={ChartLineDown} 
              footerText="Podemos melhorar! Teste novos horários ou formatos nesses dias"
              days={[
                { name: "terça-feira", percentage: "+18%" },
                { name: "Sábado", percentage: "+22%" }
              ]}
            />
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

