import style from "../styling/EmployeesPage.module.css";
import avatar from "../assets/avatar.png"
const EmployeesPage = () => {
    const employee = [
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
        {
            name: "Esha Talwar",
            empId: 32,
            mail: "abc@gamic.com",
            assignedLeads: 15,
            closedLeads: 12,
            status: "active"
        },
    ]
    return (
        <>
            <section className={style.header}>
                Home{">"}Employees
                <button>Add Leads</button>
            </section>
            <section >
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Emp Id</th>
                            <th>Assigned Leads</th>
                            <th>Closed Leads</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((emp, index) => (
                                <tr key={index} className={style.row}>
                                    <td>
                                        <div>
                                            <img src={avatar} alt="" />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "8px" }}>
                                            <div style={{ fontWeight: "400", color: "black" }}>
                                                {emp.name}
                                            </div>
                                            <div>
                                                {emp.mail}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{emp.empId}</td>
                                    <td>{emp.assignedLeads}</td>
                                    <td>{emp.closedLeads}</td>
                                    <td>{emp.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
};
export default EmployeesPage;