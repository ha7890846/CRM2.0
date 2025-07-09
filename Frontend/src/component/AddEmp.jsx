import style from "../styling/AddEmpModal.module.css";
import { FiInfo } from 'react-icons/fi';
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const AddEmp = ({ onClose, employeeToEdit, refreshEmployees }) => {
    const modalRef = useRef();
    const [hoveredField, setHoveredField] = useState(null);
    const isEditMode = !!employeeToEdit;
    
    const [formData, setFormData] = useState({
        firstName: isEditMode ? employeeToEdit.name.split(' ')[0] : '',
        lastName: isEditMode ? employeeToEdit.name.split(' ').slice(1).join(' ') : '',
        email: isEditMode ? employeeToEdit.email : '',
        empId: isEditMode ? employeeToEdit.empId : '',
        location: isEditMode ? employeeToEdit.location : 'bangalore',
        language: isEditMode ? employeeToEdit.language : 'tamil',
        activeIndicator: isEditMode ? employeeToEdit.activeIndicator : false,
        assignedLead: isEditMode ? employeeToEdit.assignedLead : 0,
        closedLead: isEditMode ? employeeToEdit.closedLead : 0
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
            const fullName = `${formData.firstName} ${formData.lastName}`.trim();
            const dataToSend = {
                name: fullName,
                email: formData.email,
                empId: Number(formData.empId),
                location: formData.location,
                language: formData.language,
                activeIndicator: formData.activeIndicator,
                assignedLead: formData.assignedLead,
                closedLead: formData.closedLead
            };

            if (isEditMode) {
                await axios.put(`https://crm2-0.onrender.com/emp/${employeeToEdit._id}`, dataToSend);
                toast.success("Employee Updated Successfully!");
            } else {
                await axios.post('https://crm2-0.onrender.com/emp/add', dataToSend);
                toast.success("Employee Added Successfully!");
            }

            refreshEmployees && refreshEmployees();
            onClose();
        } catch (error) {
            toast.error(error.response?.data?.error || error.message);
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
                <h1>{isEditMode ? 'Edit Employee' : 'Add New Employee'}</h1>
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

                    <label>Employee ID</label>
                    <input
                        type="text"
                        name="empId"
                        value={formData.empId}
                        onChange={handleChange}
                        required
                    />

                    <label>Location</label>
                    <div className={style.inputTip}>
                        <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            disabled={isEditMode}
                        >
                            <option value="bangalore">Bangalore</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                        </select>
                        {!isEditMode && <FiInfo
                            onMouseEnter={() => setHoveredField('location')}
                            onMouseLeave={() => setHoveredField(null)}
                        />}
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
                            disabled={isEditMode}
                        >
                            <option value="tamil">Tamil</option>
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                        </select>
                        {!isEditMode && <FiInfo
                            onMouseEnter={() => setHoveredField('language')}
                            onMouseLeave={() => setHoveredField(null)}
                        />}
                        {hoveredField === 'language' && (
                            <div className={style.tooltip}>{tooltips.language}</div>
                        )}
                    </div>

                    <label>
                        <input
                            type="checkbox"
                            name="activeIndicator"
                            checked={formData.activeIndicator}
                            onChange={handleChange}
                        />
                        Active Employee
                    </label>

                    <button type="submit">{isEditMode ? 'Update' : 'Save'}</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmp;