"use client";
import Image from "next/image";
import Style from "./aside.module.css";
import Link from "next/link";
import Logo from "../../../public/LogoTipo.svg";
import { usePathname } from "next/navigation";
import { HouseIcon,CalendarBlankIcon,NotePencilIcon,ChartBarIcon,SignOutIcon } from "@phosphor-icons/react";
import Cookie from "js-cookie";
import { useState,useEffect } from "react";

export default function Aside() {

  const pathname = usePathname();
  const [name, setName] = useState("");

  useEffect(() => {
    const getInformations = async() => {
      try {
        setName(Cookie.get("name") || "");
      }catch (error) {}
    }

    getInformations();
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? Style.clicado : "";
  }
  console.log(isActive("/"));




  return (
    <aside className={Style.aside}>
      <div>
        <Image src={Logo} alt="logo" width={200} height={90} />
        <div className={Style.menu}>
          <nav>
              <ul>
                  <li className={isActive("/")}><HouseIcon className={Style.icon} /><Link href="/">Ínicio</Link></li>
                  <li className={isActive("/calendar")}><CalendarBlankIcon className={Style.icon} /><Link href="/calendar">Calendário</Link></li>
                  <li className={isActive("/posts")}><NotePencilIcon className={Style.icon} /><Link href="/posts">Posts</Link></li>
                  <li className={isActive("/dashboard")}><ChartBarIcon className={Style.icon} /><Link href="/dashboard">Dashboard</Link></li>
              </ul>
          </nav>
        </div>
      </div>
      <div className={Style.user}>
        <div className={Style.userProfile}>
            <div>
                <Image src="/user.png" alt="user" width={60} height={60} />
            </div>
            <div className={Style.userInfo}>
                <label>Seu perfil</label>
                <h4>{name}</h4>
            </div>
        </div>
        <button className={Style.signOutButton}><SignOutIcon />Sair</button>
      </div>
    </aside>
  );
}