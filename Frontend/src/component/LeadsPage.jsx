import style from "../styling/LeadsPage.module.css";
const LeadsPage = () => {
    const data = [
        {
            no: 5,
            date: "05/02/2025",
            name: "abc",
            totalLeads: 100,
            assignedLeads: 50,
            unassignedLeads: 40,
            closedLeads: 10
        },
    ]
    return (
        <>
            <section className={style.header}>
                Home{">"}Dashboard
                <button>Add Leads</button>
            </section>
            <section className={style.table}>
                <div className={style.head}>
                    <div>No</div>
                    <div>Name</div>
                    <div>Date</div>
                    <div>No of Leads</div>
                    <div>Assigned Leads</div>
                    <div>Unassigned Leads</div>
                    <div>Closed Leads</div>
                </div>
                <div>
                    {
                        data.map((item, index) => (
                            <div key={index} className={style.row}>
                                <div>{item.no}</div>
                                <div>{item.name}</div>
                                <div>{item.date}</div>
                                <div>{item.totalLeads}</div>
                                <div>{item.assignedLeads}</div>
                                <div>{item.unassignedLeads}</div>
                                <div>{item.closedLeads}</div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};
export default LeadsPage;