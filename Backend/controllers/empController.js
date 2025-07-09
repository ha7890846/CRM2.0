const Employee = require('../models/EmpModel');

exports.getEmp = async (req, res) => {
  try {
    const emps = await Employee.find();
    res.json(emps);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addEmp = async (req, res) => {
  try {
    const Emp = new Employee(req.body);
    await Emp.save();
    res.status(201).json(Emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// In your empController.js file
exports.deleteEmp = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID
    if (!id) {
      return res.status(400).json({ error: 'Employee ID is required' });
    }

    // Find and delete the employee
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ 
      message: 'Employee deleted successfully',
      deletedEmployee 
    });
  } catch (err) {
    console.error('Error deleting employee:', err);
    
    // Handle specific errors
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid employee ID format' });
    }
    
    res.status(500).json({ 
      error: 'Server error while deleting employee',
      details: err.message 
    });
  }
};
// In empController.js
exports.updateEmp = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!id) {
            return res.status(400).json({ error: 'Employee ID is required' });
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(200).json(updatedEmployee);
    } catch (err) {
        console.error('Error updating employee:', err);
        res.status(500).json({ error: 'Server error while updating employee' });
    }
};