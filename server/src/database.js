const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/empleadosdb',{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("Conexion exitosa"))
    .catch((err) => console.error(err));
