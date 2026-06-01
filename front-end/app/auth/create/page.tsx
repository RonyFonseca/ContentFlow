"use client";
import {useState} from "react"; // 1. Importando o useState para capturar os dados
import Style from "../auth.module.css";
import Logo from "../../../public/LogoTipo.svg";
import AuthLayout from "../../components/AuthLayout/layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, EnvelopeIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { api } from "../../../services/api"; // 2. Importando a conexão da API que você criou

export default function CreateAccountPage() {
    // 3. Criando "estados" para salvar temporariamente o que é digitado
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função ao clicar no botão "Criar conta"
    async function handleCreateAccount(event: React.FormEvent) {
        event.preventDefault(); // Impede a página de recarregar com o envio do formulário

        try {
            const response = await api.post("/createUser", {
                name,
                email,
                password
            });

            //(Status 201) back
            alert(response.data); 
            
            setName("");
            setEmail("");
            setPassword("");

        } catch (error: any) {
            const errorMessage = error.response?.data?.error || "Erro ao conectar com o servidor.";
            alert(`Erro no cadastro: ${errorMessage}`);
        }
    }

    return (
        <AuthLayout>
            <header className={Style.header}>
                <ul>
                    <li><Image src={Logo} alt="Logo" width={160}/></li>
                    <li className={Style.button_destaque_header}>
                        <ArrowLeftIcon width={20}/>
                        <Link href="/auth/login">Log in</Link>
                    </li>
                </ul>
            </header>

            <h2 className={Style.title}>Crie sua conta</h2>
            <p className={Style.legend}>
                Planeje. Organize. Publique. Cresça
            </p>

            {/* 3. Adicionado o onSubmit para disparar a nossa função */}
            <form className={Style.form} onSubmit={handleCreateAccount}>
                <div>
                    <UserIcon width={20} className={Style.icon}/>
                    {/* Conectando o input ao valor do estado 'name' */}
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <EnvelopeIcon width={20} className={Style.icon}/>
                    {/* Conectando o input ao valor do estado 'email' */}
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <LockKeyIcon width={20} className={Style.icon}/>
                    {/* Conectando o input ao valor do estado 'password' */}
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Criar conta</button>
            </form>
        </AuthLayout>
    );
}