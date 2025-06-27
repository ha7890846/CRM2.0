import style from "../styling/MobileWrapper.module.css";
import { MdHomeFilled } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { IoIosArrowBack } from "react-icons/io";

const MobileViewWrapper = () => {
    const name = "Ravi Mehta";
    const location = useLocation();

    const isDashboard = location.pathname === '/emp-dashboard';
    const pageTitles = {
        '/emp-leads': 'Leads',
        '/emp-schedule': 'Schedule',
        '/emp-profile': 'Profile'
    };


    return (
        <div className={style.mainContainer}>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                maxWidth: '393px',
                margin: '0 auto',
                background: '#2051E5',
                color: 'white',
                height: '15%',
                paddingLeft: '25px',
                paddingBottom:'20px',
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
                boxSizing: 'border-box',
                zIndex: 100,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
            }}>
                <h3>
                    Canova<span style={{ color: "yellow" }}>CRM</span>
                </h3>
                {isDashboard ? (
                    <>
                        <h3>Good Morning</h3>
                        <h3>{name}</h3>
                    </>
                ) : (
                    <h3 style={{display:'flex',alignItems:'center'}}><IoIosArrowBack/>{pageTitles[location.pathname] || ''}</h3>
                )}
            </div>
            <div style={{
                position: 'absolute',
                top: '15%',
                bottom: '60px',
                width: '100%',
                overflowY: 'auto',
                padding: '10px 20px',
                boxSizing: 'border-box'
            }}>
                <Outlet />
            </div>
            <nav className={style.navbar}>
                <NavLink
                    to="/emp-dashboard"
                    className={({ isActive }) =>
                        isActive ? `${style.nav} ${style.active}` : style.nav
                    }
                >
                    <MdHomeFilled size={30} />
                    Home
                </NavLink>

                <NavLink
                    to="/emp-leads"
                    className={({ isActive }) =>
                        isActive ? `${style.nav} ${style.active}` : style.nav
                    }
                >
                    <IoIosContacts size={30} />
                    Leads
                </NavLink>

                <NavLink
                    to="/emp-schedule"
                    className={({ isActive }) =>
                        isActive ? `${style.nav} ${style.active}` : style.nav
                    }
                >
                    <VscCalendar size={30} />
                    Schedule
                </NavLink>

                <NavLink
                    to="/emp-profile"
                    className={({ isActive }) =>
                        isActive ? `${style.nav} ${style.active}` : style.nav
                    }
                >
                    <CgProfile size={30} />
                    Profile
                </NavLink>
            </nav>
        </div>
    );
};
export default MobileViewWrapper;