const mongoose = require("mongoose");
const { Schema } = mongoose;

//* Definimos la tabla de BD, pero en MongoDb lo hacemos en fomra JSON
const LibroSchema = new Schema({
	titulo: { type: String, require: true },
	descripcion: { type: String, require: true },
	imagen: { type: String, require: true },
	stock: { type: Number, require: true },
	destacado: { type: Boolean, require: true },
});

//* 📦 Exportacion de Modulo 📦
module.exports = mongoose.model.Libro || mongoose.model("Libro", LibroSchema);
