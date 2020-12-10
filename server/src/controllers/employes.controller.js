const { router } = require("../app");

const empleado = {}

const empleados = require('../models/empleados');
const { params } = require("../routes/employees.routes");

empleado.getempleados = async (req, res) => {
    const Empleados = await empleados.find()
    res.json(Empleados)
};
empleado.crearempleado = async (req, res) => {
    //console.log(req.body)
    const nuevoempleado = new empleados(req.body)
    // console.log(nuevoempleado)
    await nuevoempleado.save()
    res.send({ message: 'empleado creado' })
};
empleado.getempleado = async (req, res) => {
    const empleado3 = await empleados.findById(req.params.id)
    res.send(empleado3)

};
empleado.editarempleado = (req, res) => { };

empleado.borrarempleado = async (req, res) => {
    await empleados.findByIdAndDelete(req.params.id)
    res.json({ status: 'Empleado Borrado' })
};


module.exports = empleado;