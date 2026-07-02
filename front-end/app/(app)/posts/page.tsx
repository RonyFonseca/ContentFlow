"use client";
import { useEffect, useState } from "react";
import Style from "./posts.module.css"; 
import HomeStyle from "../home.module.css"; 
import { useRouter } from "next/navigation";
import { Plus, MagnifyingGlass, CaretDown } from "@phosphor-icons/react";
import { api } from "../../../services/api";
import Cookie from "js-cookie";



export default function Posts() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInformations = async () => {
      try {

        const response = await api.get("/getAllPostsById", {
          headers: {
            Authorization: `Bearer ${Cookie.get("token")}`
          }
        });

        setPosts(response.data.posts);
        console.log("Informações recebidas:", response.data);
      } catch (error) {
        console.error("Erro ao buscar informações:", error);
      }
    };

    getInformations();
  }, []);

  const handleStatusChange = async(id:string, status:string) => {
    const response = await api.patch(`/posts/${id}/status`, {status}); 

    window.location.reload();
  }


  return (
    <div className={Style.postsPageContainer}>
      <header className={Style.header}>
        <h1 className={Style.pageTitle}>Meus Posts</h1>
        <button 
            className={Style.newPostButton} 
            onClick={() => router.push("/posts/create")}
        >
          <Plus size={20} weight="bold" />
          Novo post
        </button>
      </header>

      {/* Filtros superiores */}
      <section className={Style.filterContainer}>
        <div className={Style.filterGroup}>
          <span>Filtrar por status:</span>
          <div className={Style.selectWrapper}>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className={Style.statusSelect}
            >
              <option value="Todos">Todos</option>
              <option value="Postado">Postado</option>
              <option value="Planejado">Planejado</option>
              <option value="Em andamento">Em andamento</option>
            </select>
            <CaretDown size={16} className={Style.selectIcon} />
          </div>
        </div>

        <div className={Style.searchWrapper}>
          <input 
            type="text" 
            placeholder="Buscar por título..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={Style.searchInput}
          />
          <MagnifyingGlass size={20} className={Style.searchIcon} />
        </div>
      </section>

      <main className={Style.mainListContainer}>
        <div className={HomeStyle.posts}>
          {posts.length === 0 ? (
            <p className={Style.noPosts}>Nenhum post encontrado.</p>
          ) : ( posts.filter((post: any) => {
            if (statusFilter !== "Todos" && post.status !== statusFilter) {
              return false;
            }
            if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return false;
            }
            return true;
          }).map((post: any, index: number) => (
            <div className={HomeStyle.post} key={index}>
              <div className={HomeStyle.date}>
                <h4>{post.date.slice(8, 10)}</h4>
                <p>JUN</p>
              </div>

              <div className={HomeStyle.postContent}>
                <p>{post.title}</p>

                <div
                  className={
                    post.status === "Postado"
                      ? HomeStyle.postStatusVerder
                      : post.status === "Em andamento"
                      ? HomeStyle.postStatusAmarelo
                      : HomeStyle.postStatusAzul
                  }
                >
                  <select
                    value={post.status}
                    onChange={(e) => handleStatusChange(post.id, e.target.value)}
                  >
                    <option value="Planejado">Planejado</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Postado">Postado</option>
                  </select>
                </div>
              </div>
            </div>
          )))}

        </div>
      </main>
    </div>
  );
}