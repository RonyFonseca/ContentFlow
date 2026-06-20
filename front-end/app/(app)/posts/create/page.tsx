"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Style from "./createPost.module.css";
import { CaretLeft } from "@phosphor-icons/react";

export default function CreatePost() {
  const router = useRouter();
  
  // Estados para controlar o formulário
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState("");
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState("Planejado"); // Padrão inicial

  async function handleSavePost(event: React.FormEvent) {
    event.preventDefault();
    
    // Implementação futura: api.post("/createPost") enviando estes dados!
    console.log({ date, title, contentType, caption, status });
    alert("Post salvo com sucesso! (Simulação)");
    router.push("/posts");
  }

  return (
    <div className={Style.container}>

        <h1 className={Style.title}>Criar Post</h1>
        
        {/* Link de Voltar */}
        <button className={Style.backButton} onClick={() => router.push("/posts")}>
            <CaretLeft size={16} />
            Voltar para calendário
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
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                required
            />
            </div>

            {/* Campo: Legenda */}
            <div className={Style.inputGroup}>
            <label>Legenda</label>
            <textarea 
                placeholder="Escreva a legenda do post..." 
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
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
                className={`${Style.badge} ${Style.badgePlanejado} ${status === "Planejado" ? Style.activePlanejado : ""}`}
                onClick={() => setStatus("Planejado")}
                >
                    Planejado
                </button>
                <button
                type="button"
                className={`${Style.badge} ${Style.badgeAndamento} ${status === "Em andamento" ? Style.activeAndamento : ""}`}
                onClick={() => setStatus("Em andamento")}
                >
                    Em andamento
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
            <button type="button" className={Style.cancelBtn} onClick={() => router.push("/posts")}>
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