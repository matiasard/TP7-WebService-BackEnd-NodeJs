const mongoose = require("mongoose");
const { Schema } = mongoose;

//* Definimos la tabla de BD, pero en MongoDb lo hacemos en fomra JSON
const AgenteSchema = new Schema({
	legajo: { type: Number, require: true },
	apellido: { type: String, require: true },
	nombre: { type: String, require: true },
	nro_documento: { type: Number, require: true },
	estado: { type: Boolean, require: true },
});

//* 📦 Exportacion de Modulo 📦
module.exports =
	mongoose.model.Agente || mongoose.model("Agente", AgenteSchema);
