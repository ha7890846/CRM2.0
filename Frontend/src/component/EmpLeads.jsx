import style from "../styling/EmpLeads.module.css";
import { TbEditCircle } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";

const EmpLeads = () => {
    const data = [
        {
            name: "Tanner Fisha",
            mail: "tannerfisha@gmail.com",
            date: "04/04/2025",
            status: "Ongoing",
        },
        {
            name: "Tanner Fisha",
            mail: "tannerfisha@gmail.com",
            date: "04/04/2025",
            status: "Ongoing",
        },
        {
            name: "Tanner Fisha",
            mail: "tannerfisha@gmail.com",
            date: "04/04/2025",
            status: "Ongoing",
        },
        {
            name: "Tanner Fisha",
            mail: "tannerfisha@gmail.com",
            date: "04/04/2025",
            status: "Ongoing",
        },
        {
            name: "Tanner Fisha",
            mail: "tannerfisha@gmail.com",
            date: "04/04/2025",
            status: "Ongoing",
        },
    ]
    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.filters}>
                    <input type="text" placeholder="searchbox" />
                    <button>filter</button>
                </div>
                <div className={style.leads}>
                    {
                        data.map((lead, index) => (
                            <div key={index} className={style.leadBox}>
                                <div className={style.lead}>
                                    <div>
                                        <h4>{lead.name}</h4>
                                        <p>{lead.mail} </p>
                                    </div>
                                    <div>
                                        Date:
                                        <br />
                                    <p>{lead.date}</p>
                                    </div>
                                </div>
                                <div className={style.lead}>
                                    <div className={style.status}>
                                        {lead.status}
                                    </div>
                                    <div className={style.icons}>
                                        <TbEditCircle size={25} />
                                        <MdOutlineWatchLater size={25} />
                                        <IoIosArrowDropdown size={25} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    );
};
export default EmpLeads;