"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Style from "./createPost.module.css";
import { CaretLeft } from "@phosphor-icons/react";
import { api } from "../../../../services/api";
import Cookie from "js-cookie";

export default function CreatePost() {
  const router = useRouter();
  
  // Estados para controlar o formulário
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("Planejado"); // Padrão inicial

  async function handleSavePost(event: React.FormEvent) {
    event.preventDefault();

    const submitPost = async () => {
      try {
        await api.post("/createPost", { date, title, content, type, status }, {
          headers: {
            Authorization: `Bearer ${Cookie.get("token")}`,
          },
        });
      } catch (error) {
        console.error("Erro ao criar post:", error);
      }
    };

    submitPost();
    router.push("/posts");
  }

  return (
    <div className={Style.container}>

        <h1 className={Style.title}>Criar Post</h1>
        
        {/* Link de Voltar */}
        <button className={Style.backButton} onClick={() => router.back()}>
            <CaretLeft size={16} />
            Voltar
        </button>

        <form className={Style.form} onSubmit={handleSavePost}>
            {/* Campo: Data */}
            <div className={Style.inputGroup}>
            <label>Data</label>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required
            />
            </div>

            {/* Campo: Título do Post */}
            <div className={Style.inputGroup}>
            <label>Título do Post</label>
            <input 
                type="text" 
                placeholder="Ex: Post sobre sofá retrátil" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </div>

            {/* Campo: Tipo de Conteúdo */}
            <div className={Style.inputGroup}>
            <label>Tipo de Conteúdo</label>
            <input 
                type="text" 
                placeholder="Ex: Educativo" 
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            />
            </div>

            {/* Campo: Legenda */}
            <div className={Style.inputGroup}>
            <label>Legenda</label>
            <textarea 
                placeholder="Escreva a legenda do post..." 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                required
            />
            </div>

            {/* Campo: Seleção de Status */}
            <div className={Style.statusGroup}>
            <label>Status</label>
            <div className={Style.badgeContainer}>
                <button
                type="button"
                className={`${Style.badge} ${Style.badgePlanejado} ${status === "Em andamento" ? Style.activePlanejado : ""}`}
                onClick={() => setStatus("Em andamento")}
                >
                    Em andamento
                </button>
                <button
                type="button"
                className={`${Style.badge} ${Style.badgeAndamento} ${status === "Planejado" ? Style.activeAndamento : ""}`}
                onClick={() => setStatus("Planejado")}
                >
                    Planejado
                </button>
                <button
                type="button"
                className={`${Style.badge} ${Style.badgePostado} ${status === "Postado" ? Style.activePostado : ""}`}
                onClick={() => setStatus("Postado")}
                >
                    Postado
                </button>
            </div>
            </div>

            <div className={Style.actions}>
            <button type="button" className={Style.cancelBtn} onClick={() => router.back()}>
                Cancelar
            </button>
            <button type="submit" className={Style.saveBtn}>
                Salvar post
            </button>
            </div>
        </form>
        </div>
    );
}