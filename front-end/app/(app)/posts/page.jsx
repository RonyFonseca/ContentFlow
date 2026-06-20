"use client";
import { useState } from "react";
import Style from "./posts.module.css"; 
import HomeStyle from "../home.module.css"; 
import { useRouter } from "next/navigation";
import { Plus, MagnifyingGlass, CaretDown } from "@phosphor-icons/react";

export default function Posts() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

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
          
          {/* Post 1 - Verde */}
          <div className={HomeStyle.post}>
            <div className={HomeStyle.date}>
              <h4>22</h4>
              <p>ABR</p>
            </div>
            <div className={HomeStyle.postContent}>
              <p>Post sobre sofá retrátil</p>
              <div className={HomeStyle.postStatusVerder}>
                <p>Postado</p>
              </div>
            </div>
          </div>

          {/* Post 2 - Amarelo */}
          <div className={HomeStyle.post}>
            <div className={HomeStyle.date}>
              <h4>24</h4>
              <p>ABR</p>
            </div>
            <div className={HomeStyle.postContent}>
              <p>Post sobre estofados</p>
              <div className={HomeStyle.postStatusAmarelo}>
                <p>Planejado</p>
              </div>
            </div>
          </div>

          {/* Post 3 - Azul */}
          <div className={HomeStyle.post}>
            <div className={HomeStyle.date}>
              <h4>28</h4>
              <p>ABR</p>
            </div>
            <div className={HomeStyle.postContent}>
              <p>Post sobre evento</p>
              <div className={HomeStyle.postStatusAzul}>
                <p>Em andamento</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}