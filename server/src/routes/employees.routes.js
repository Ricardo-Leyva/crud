const { Routes, Router } = require('express')
const router = Router()
const employeesctrl = require('../controllers/employes.controller')

router.get('/', employeesctrl.getempleados);
router.post('/', employeesctrl.crearempleado);
router.get('/:id', employeesctrl.getempleado);
router.put('/:id', employeesctrl.editarempleado);
router.delete('/:id', employeesctrl.borrarempleado);


module.exports = router