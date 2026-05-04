"use client";
import Image from 'next/image';
import Style from './card.module.css';

import { StaticImageData } from "next/image";

type Props = {
  quantidade: number;
  description: string;
  icon: StaticImageData;
};
export default function Card({ quantidade, description, icon }: Props) {
    return (
        <div className={Style.card}>
            <div className={Style.icon}>
                <Image src={icon} alt={"icone"} width={74} height={74} />
            </div>
            <h2 className={Style.quantity}>{quantidade}</h2>
            <p className={Style.description}>{description}</p>
        </div>
    );
}