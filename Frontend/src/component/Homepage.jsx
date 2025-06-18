import { Outlet } from "react-router-dom";
import style from "../styling/Homepage.module.css";
import Sidebar from "./Sidebar";
const Homepage = () => {
    return (
        <main >
            <section className={style.title}>
                <h3>
                    Canova<span>CRM</span>
                </h3>
            </section>
            <section className={style.navbar}><Sidebar /></section>
            <section className={style.searchbar}>Search Here....</section>
            <section className={style.outlets}> <Outlet /></section>
        </main>
    )
}
export default Homepage;