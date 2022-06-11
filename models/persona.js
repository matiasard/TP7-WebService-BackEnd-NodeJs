const { Schema, model } = require("mongoose");

const PersonaSchema = new Schema({
	apellido: { type: String, required: true },
	nombre: { type: String, require: true },
	nro_documento: { type: String, require: true },
	email: { type: String, require: true },
});

//* 📦 Exportacion de Modulo 📦
module.exports = model("Persona", PersonaSchema);
