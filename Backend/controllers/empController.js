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
    console.log("Emp Added Successfully")
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};