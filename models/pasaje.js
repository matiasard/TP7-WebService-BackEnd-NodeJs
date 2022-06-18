const { Schema, model } = require("mongoose");
const Persona = require("./persona");

const pasajeSchema = new Schema({
	precioPasaje: { type: Number, required: true },
	categoriaPasajero: { type: String, required: true },
	fechaCompra: { type: Date, required: true, default: new Date() },
	pasajero: { type: Schema.Types.ObjectId, ref: Persona, required: true },
});

//* 📦 Exportacion de Modulo 📦
module.exports = model("Pasaje", pasajeSchema);
