import Aside from "../components/Aside/aside";
import Style from "./global.module.css"; 

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id={Style.appLayout}>
      <Aside />
      <main className={Style.main}>
        {children}
      </main>
    </div>
  );
}