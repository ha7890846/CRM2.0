import { NavLink } from "react-router-dom";
import style from "../styling/Homepage.module.css";
const Sidebar = () => {
  return (
    <>
      <NavLink to="/dashboard" className={style.nav}>Dashboard</NavLink>
      <NavLink to="/leads" className={style.nav}>Leads</NavLink>
      <NavLink to="/employees" className={style.nav}>Employees</NavLink>
      <NavLink to="/settings" className={style.nav}>Settings</NavLink>
    </>
  );
};
export default Sidebar;
