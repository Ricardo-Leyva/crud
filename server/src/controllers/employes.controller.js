const { router } = require("../app");

const empleado = {}

empleado.getempleados = (req,res) => {
    res.send('get empleados')
}
empleado.crearempleado = (req,res) => {
    res.send('crear empleado')
}
empleado.getempleado = (req,res) => {}
empleado.editarempleado = (req,res) => {}
empleado.borrarempleado = (req,res) => {}


module.exports = empleado;