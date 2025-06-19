import style from "../styling/Dashboard.module.css";
import unassigned from "../assets/unassigned.png"
import assigned from "../assets/assignWeek.png"
import rate from "../assets/conversionRate.png"
import active from "../assets/activePerson.png"
const DashBoard = () => {
    const boxData = [
        {
            img: unassigned,
            title: "Unassigned Lab",
            content: "5"
        },
        {
            img: assigned,
            title: "Assigned This Week",
            content: "4"
        },
        {
            img: active,
            title: "Active SalesPeople",
            content: "7"
        },
        {
            img: rate,
            title: "Conversion Rate",
            content: "6"
        }
    ];
    return (
        <>
            <div>
                Home{">"}Dashboard
            </div>
            <section className={style.reportContainer}>
                {
                    boxData.map((box, index) => (
                        <div key={index} className={style.reportBox}>
                            <img src={box.img} alt="" />

                            {box.title}
                            {box.content}
                        </div>
                    ))
                }
            </section>
            <section className={style.analyticsContainer}>
                <div className={style.saleChart}>
                Sale Analytics
                
                </div>
                <div className={style.activity}>
                    Recent Activity Fedd:
                </div>
            </section>
            <section className={style.activePerson}>
                Employees
            </section>
        </>
    );
};
export default DashBoard;