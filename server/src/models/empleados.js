const { Schema, model } = require('mongoose');

const empleadoschema = new Schema(
    {
        nombre: { type: String, required: true },
        cargo: { type: String, required: true },
        office: { type: String, required: true },
        salario: { type: Number, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("empleados", empleadoschema);