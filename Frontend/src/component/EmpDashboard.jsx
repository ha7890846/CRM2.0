import style from "../styling/EmpDashboard.module.css";
const EmpDashboard = () => {
    const breakTime = [
        {
            start: "10:30",
            end: "11:30",
            date: "01/10/2025"
        },
        {
            start: "10:30",
            end: "11:30",
            date: "01/10/2025"
        },
        {
            start: "10:30",
            end: "11:30",
            date: "01/10/2025"
        },
        {
            start: "10:30",
            end: "11:30",
            date: "01/10/2025"
        },

    ];
    const list = [
        "You were assigned 3 more new lead – 1 hour ago",
        "You Closed a deal today – 2 hours ago",
        "Your score is 20 out of 50 - increse it!",
    ]
    return (
        <>
            <div className={style.main}>
                <span>Timings</span>
                <div className={style.activeBox}>
                    <div className={style.checkTime}>
                        <div className={style.timeBox}>
                            <div>Check-In</div>
                            <div>--:--</div>
                        </div>
                        <div className={style.timeBox}>
                            <div>Check-Out</div>
                            <div>--:--</div>
                        </div>
                    </div>
                    <button></button>
                </div>
                <div className={style.breakBox}>
                    <div className={style.breakHead}>
                        <div className={style.checkTime}>
                            <div className={style.timeBox}>
                                <div>Break</div>
                                <div>--:--</div>
                            </div>
                        </div>
                        <button></button>
                    </div>
                    {
                        breakTime.map((item, index) => (
                            <div key={index}>
                                <div className={style.breakList}>
                                    <div className={style.checkTime}>
                                        <div className={style.timeBox}>
                                            <div>Check-In</div>
                                            <div>{item.start}</div>
                                        </div>
                                        <div className={style.timeBox}>
                                            <div>Check-Out</div>
                                            <div>{item.end}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>Date</div>
                                        <div>{item.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <span>Recent Activity</span>
                <div className={style.activityBox}>
                    <div className={style.scrollContent}>
                        {list.concat(list).map((item, index) => (
                            <div key={index} className={style.scrollItem}>
                                <li>
                                    {item}
                                </li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default EmpDashboard;