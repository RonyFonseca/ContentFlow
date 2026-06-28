"use client";
import Style from "../auth.module.css";
import Logo from "../../../public/LogoTipo.svg";
import AuthLayout from "../../components/AuthLayout/layout";
import Image from "next/image";
import Link from "next/link";
import {ArrowRightIcon,EnvelopeIcon,LockKeyIcon} from "@phosphor-icons/react";
import {api} from "../../../services/api"; // 2. Importando a conexão da API que você criou
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importando o hook useRouter


export default function LoginPage() {
    const router = useRouter(); // Inicializando o hook useRouter

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados de login para o servidor
        try {
            // Exemplo de envio de dados para o servidor
            const response = await api.post("/login", {
                email,
                password
            });

            document.cookie = `token=${response.data.token}; path=/;`;
            document.cookie = `name=${response.data.name}; path=/;`;

            router.push("/"); // Redireciona para a página de dashboard após o login bem-sucedido
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    }



    return (
        <AuthLayout>
            <header className={Style.header}>
                <ul>
                    <li><Image src={Logo} alt="Logo" width={160}/></li>
                    <li className={Style.button_destaque_header}>
                        <Link href="/auth/create">Cadastrar</Link>
                        <ArrowRightIcon width={50}/>
                    </li>
                </ul>
            </header>
            <h2 className={Style.title}>Log in</h2>
            <form className={Style.form}>
                <div>
                    <EnvelopeIcon width={20} className={Style.icon}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <LockKeyIcon width={20} className={Style.icon}/>
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Log in</button>
            </form>
        </AuthLayout>
        )
}