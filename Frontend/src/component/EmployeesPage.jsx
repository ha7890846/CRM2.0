import style from "../styling/EmployeesPage.module.css";
import avatar from "../assets/Avatar.png"
import { useEffect, useState } from "react";
import axios from "axios";
import AddEmp from "./AddEmp";
const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const { data } = await axios.get(
                    `https://crm2-0.onrender.com/emp`
                );
                setEmployees(data);
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch employees:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);


    if (loading) return <div className={style.loading}>Loading employees...</div>;
    if (error) return <div className={style.error}>Error: {error}</div>;
    return (
        <>
            <section className={style.header}>
                Home{">"}Employees
                <button onClick={toggleModal}>Add Emp</button>
                {
                    showModal && <AddEmp onClose={toggleModal} />
                }
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
                            employees.map((emp, index) => (
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
                                                {emp.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{emp.empId}</td>
                                    <td>{emp.assignedLead}</td>
                                    <td>{emp.closedLead}</td>
                                    <td>
                                        <span className={emp.activeIndicator ? style.active : style.inactive}>
                                            {emp.activeIndicator ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    {/* <td>{emp.activeIndicator}</td> */}
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