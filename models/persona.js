const { Schema, model } = requiere("mongoose");

const PersonaSchema = new Schema({
	apellido: { type: String, required: true },
	nombre: { type: String, require: true },
	nro_documento: { type: String, require: true },
	email: { type: String, require: true },
});

module.exports = model("Persona", PersonaSchema);
