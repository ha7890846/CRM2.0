import style from "../styling/AddEmpModal.module.css";
import { FiInfo } from 'react-icons/fi';
import { useRef, useState, useEffect } from "react";
import axios from "axios"; 

const AddEmp = ({ onClose }) => {
    const modalRef = useRef();
    const [hoveredField, setHoveredField] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        empId: '',
        location: 'bangalore',
        activeIndicator: false,
        assignedLead: 0,
        closedLead: 0
    });

    const tooltips = {
        location: "Lead will be assigned based on Location.",
        language: "Lead will be assigned based on Language."
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'activeIndicator' ? e.target.checked : value
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Convert empId to number as per your schema
            const dataToSend = {
                ...formData,
                empId: Number(formData.empId)
            };
            await axios.post('https://crm2-0.onrender.com/emp/add', dataToSend);
            alert('Employee added successfully!');
            refreshEmployees(); // Refresh the employee list
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error adding employee:', error);
            alert(`Error: ${error.response?.data?.error || error.message}`);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className={style.modalOverlay}>
            <div ref={modalRef} className={style.mainContainer}>
                <h1>Add New Employee</h1>
                <form onSubmit={handleSave}>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Location</label>
                    <div className={style.inputTip}>
                        <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        >
                            <option value="bangalore">Bangalore</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                        </select>
                        <FiInfo
                            onMouseEnter={() => setHoveredField('location')}
                            onMouseLeave={() => setHoveredField(null)}
                        />
                        {hoveredField === 'location' && (
                            <div className={style.tooltip}>{tooltips.location}</div>
                        )}
                    </div>

                    <label>Language</label>
                    <div className={style.inputTip}>
                        <select
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                        >
                            <option value="tamil">Tamil</option>
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                        </select>
                        <FiInfo
                            onMouseEnter={() => setHoveredField('language')}
                            onMouseLeave={() => setHoveredField(null)}
                        />
                        {hoveredField === 'language' && (
                            <div className={style.tooltip}>{tooltips.language}</div>
                        )}
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmp;