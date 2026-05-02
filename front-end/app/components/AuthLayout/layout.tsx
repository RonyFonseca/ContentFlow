"use client";
import Style from "./layout.module.css";
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={Style.containerAuth}>
            <div className={Style.content}>
                {children}
            </div>
        </div>
    );
}
