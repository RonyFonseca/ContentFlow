"use client";
import Style from "../auth.module.css";
import Logo from "../../../public/LogoTipo.svg";
import AuthLayout from "../../components/AuthLayout/layout";
import Image from "next/image";
import { ArrowLeftIcon, EnvelopeIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";

export default function CreateAccountPage() {
    return (
        <AuthLayout>
            <header className={Style.header}>
                <ul>
                    <li><Image src={Logo} alt="Logo" width={160}/></li>
                    <li className={Style.button_destaque_header}>
                        <ArrowLeftIcon width={20}/>
                        <a href="/auth/login">Log in</a>
                    </li>
                </ul>
            </header>

            <h2 className={Style.title}>Crie sua conta</h2>
            <p className={Style.legend}>
                Planeje. Organize. Publique. Cresça
            </p>

            <form className={Style.form}>
                <div>
                    <UserIcon width={20} className={Style.icon}/>
                    <input type="text" placeholder="Nome" />
                </div>

                <div>
                    <EnvelopeIcon width={20} className={Style.icon}/>
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <LockKeyIcon width={20} className={Style.icon}/>
                    <input type="password" placeholder="Senha" />
                </div>

                <button type="submit">Criar conta</button>
            </form>
        </AuthLayout>
    );
}