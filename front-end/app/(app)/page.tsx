"use client";
import Style from "./home.module.css";
import {useState} from "react";
import Card from "../components/Card/card";
import Note from '../../public/Note.svg';
import Check from '../../public/check.svg';
import Clock from '../../public/clock.svg';
export default function Home() {
  const [name, setName] = useState("Rony");

  return (
    <div id={Style.home}>
      <header>
        <h1 className={Style.h1}>Olá, {name}!</h1>
        <p>Aqui está o resumo do seu planejamento.</p>
      </header>
      <section id={Style.cards}>
       <Card quantidade={12} description="Posts planejados" icon={Note} />
       <Card quantidade={5} description="Tarefas concluídas" icon={Check} />
       <Card quantidade={8} description="Tarefas pendentes" icon={Clock} />
      </section>
      <main className={Style.main}>
        <div className={Style.nextPosts}>
          <h2 >Próximos posts</h2>
          <a  className={Style.seeAll}>ver todos</a>
        </div>
        <div className={Style.posts}>
          <div className={Style.post}>
            <div className={Style.date}>
              <h4>22</h4>
              <p>ABR</p>
            </div>
            <div className={Style.postContent}>
              <p>Post sobre sofá retrátil</p>
              <div className={Style.postStatusVerder}>
                <p>Postado</p>
              </div>
            </div>
          </div>

          <div className={Style.post}>
            <div className={Style.date}>
              <h4>24</h4>
              <p>ABR</p>
            </div>
            <div className={Style.postContent}>
              <p>Post sobre sofá retrátil</p>
              <div className={Style.postStatusAmarelo}>
                <p>Planejado</p>
              </div>
            </div>
          </div>

          <div className={Style.post}>
            <div className={Style.date}>
              <h4>26</h4>
              <p>ABR</p>
            </div>
            <div className={Style.postContent}>
              <p>Post sobre sofá retrátil</p>
              <div className={Style.postStatusAzul}>
                <p>Planejado</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
