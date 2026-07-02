"use client";
import Style from "./home.module.css";
import {useState} from "react";
import Card from "../components/Card/card";
import Note from '../../public/Note.svg';
import Check from '../../public/check.svg';
import Clock from '../../public/clock.svg';
import {useEffect} from "react";
import Cookie from "js-cookie";
import { api } from "../../services/api";

export default function Home() {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInformations = async () => {
      try {
        setName(Cookie.get("name") || "");

        const response = await api.get("/getAllPostsById", {
          headers: {
            Authorization: `Bearer ${Cookie.get("token")}`
          }
        });

        setPosts(response.data.posts);
      } catch (error) {
        console.error("Erro ao buscar informações:", error);
      }
    };

    getInformations();
  }, []);

  const getMonth = (date: string) => {
    const months = [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ];

    const month = Number(date.split("-")[1]); // "07" -> 7

    return months[month - 1];
  };


  const getPlanejados = () => {
    return posts.filter((post: any) => post.status === "Planejado").length;
  }

  const getConcluidos = () => {
    return posts.filter((post: any) => post.status === "Postado").length;
  }

  const getPendentes = () => {
    return posts.filter((post: any) => post.status === "Em andamento").length;
  }

  return (
    <div id={Style.home}>
      <header>
        <h1 className={Style.h1}>Olá, {name}!</h1>
        <p>Aqui está o resumo do seu planejamento.</p>
      </header>
      <section id={Style.cards}>
       <Card quantidade={getPlanejados()} description="Posts planejados" icon={Note} />
       <Card quantidade={getConcluidos()} description="Tarefas concluídas" icon={Check} />
       <Card quantidade={getPendentes()} description="Tarefas pendentes" icon={Clock} />
      </section>
      <main className={Style.main}>
        <div className={Style.nextPosts}>
          <h2 >Próximos posts</h2>
          <a  className={Style.seeAll} onClick={() => window.location.href = "/posts"}>ver todos</a>
        </div>
        <div className={Style.posts}>
          {posts.length === 0 ? (
            <p className={Style.noPosts}>Nenhum post encontrado.</p>
          ) : ( posts.slice(0, 3).map((post: any, index: number) => ( //exibir apenas 3
            <div className={Style.post} key={index}>
              <div className={Style.date}>
                <h4>{post.date.slice(8, 10)}</h4>
                <p>{getMonth(post.date)}</p>
              </div>
              <div className={Style.postContent}>
                <p>{post.title}</p>
                <div className={ post.status === "Postado" ? Style.postStatusVerder :post.status === "Em andamento" ? Style.postStatusAmarelo : Style.postStatusAzul}>
                  <p>{post.status}</p>
                </div>
              </div>
            </div>
          )))}
        </div>
      </main>
    </div>
  );
}
