import style from "../styling/EmployeesPage.module.css";
import avatar from "../assets/Avatar.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { TbDotsVertical } from "react-icons/tb"
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEmp from "./AddEmp";
import toast from "react-hot-toast";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const employeesPerPage = 6;
    const [sortConfig, setSortConfig] = useState({
        key: "name",
        direction: "asc"
    });
    const toggleModal = () => {
        setShowModal(!showModal);
        if (showModal) setEditingEmployee(null);
    };
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const { data } = await axios.get(`https://crm2-0.onrender.com/emp`);
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

    const sortedEmployees = [...employees].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
    });
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPages = Math.ceil(employees.length / employeesPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const requestSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };
    const toggleMenu = (empId) => {
        setActiveMenu(activeMenu === empId ? null : empId);
    };
    const closeMenu = () => {
        setActiveMenu(null);
    };
    const deleteEmployee = async (empId) => {
        try {
            await axios.delete(`https://crm2-0.onrender.com/emp/${empId}`);
            setEmployees(employees.filter(emp => emp._id !== empId));
            setActiveMenu(null);
            toast.success(`Employee Deleted Successfully!`)
        } catch (err) {
            toast.error(`${err}`)
        }
    };
    const handleEditClick = (employee) => {
        setEditingEmployee(employee);
        setShowModal(true);
    };

    if (loading) return <div className={style.loading}>Loading employees...</div>;
    if (error) return <div className={style.error}>Error: {error}</div>;

    return (
        <>
            <section className={style.header}>
                Home{">"}Employees
                <button onClick={toggleModal}>Add Emp</button>
                {showModal && <AddEmp onClose={toggleModal} employeeToEdit={editingEmployee}
                 refreshEmployees={() => {
                    axios.get(`https://crm2-0.onrender.com/emp`).then(({ data }) => setEmployees(data));
                }} />}
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => requestSort("name")}>
                                Name {sortConfig.key === "name" && (sortConfig.direction === "asc" ? <FaSortUp size={15} /> : <FaSortDown size={15} />)}
                            </th>
                            <th onClick={() => requestSort("empId")}>
                                Emp Id {sortConfig.key === "empId" && (sortConfig.direction === "asc" ? <FaSortUp size={15} /> : <FaSortDown size={15} />)}
                            </th>
                            <th onClick={() => requestSort("assignedLead")}>
                                Assigned Leads {sortConfig.key === "assignedLead" && (sortConfig.direction === "asc" ?<FaSortUp size={15} /> : <FaSortDown size={15} />)}
                            </th>
                            <th onClick={() => requestSort("closedLead")}>
                                Closed Leads {sortConfig.key === "closedLead" && (sortConfig.direction === "asc" ?<FaSortUp size={15} /> : <FaSortDown size={15} />)}
                            </th>
                            <th onClick={() => requestSort("activeIndicator")}>
                                Status {sortConfig.key === "activeIndicator" && (sortConfig.direction === "asc" ? <FaSortUp size={15} /> : <FaSortDown size={15} />)}
                            </th>
                        </tr>
                    </thead>
                    <tbody onClick={closeMenu}>
                        {currentEmployees.map((emp) => (
                            <tr key={emp._id} className={style.row}>
                                <td>
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column"}}>
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
                                <td>
                                    <div className={style.menuContainer}>
                                        <TbDotsVertical
                                            size={20}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleMenu(emp._id);
                                            }}
                                        />
                                        {activeMenu === emp._id && (
                                            <div className={style.menuDropdown}>
                                                <button className={style.menuButton} onClick={() => handleEditClick(emp)}>Edit</button>
                                                <button
                                                    className={style.menuButton}
                                                    onClick={() => deleteEmployee(emp._id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={style.pagination}>
                    <button
                        className={style.shiftButton}
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <FaArrowLeftLong />
                        Previous
                    </button>
                    <div>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={currentPage === i + 1 ? style.activePage : ""}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        className={style.shiftButton}
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                        <FaArrowRight />
                    </button>
                </div>
            </section>
        </>
    );
};
export default EmployeesPage;