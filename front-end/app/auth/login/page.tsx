"use client";
import Style from "../auth.module.css";
import Logo from "../../../public/LogoTipo.svg";
import AuthLayout from "../../components/AuthLayout/layout";
import Image from "next/image";
import {ArrowRightIcon,EnvelopeIcon,LockKeyIcon} from "@phosphor-icons/react";


export default function LoginPage() {
    return (
        <AuthLayout>
            <header className={Style.header}>
                <ul>
                    <li><Image src={Logo} alt="Logo" width={160}/></li>
                    <li className={Style.button_destaque_header}>
                        <a href="#">Cadastrar</a>
                        <ArrowRightIcon width={50}/>
                    </li>
                </ul>
            </header>
            <h2 className={Style.title}>Log in</h2>
            <form className={Style.form}>
                <div>
                    <EnvelopeIcon width={20} className={Style.icon}/>
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <LockKeyIcon width={20} className={Style.icon}/>
                    <input type="password" placeholder="Senha" />
                </div>
                <button>Log in</button>
            </form>
        </AuthLayout>
        )
}