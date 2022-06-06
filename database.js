const mongoose = require("mongoose");
const URI = "mongodb://localhost/proyectodb";

//* Coneccion con la Base de Datos MongoDB
mongoose
	.connect(URI)
	.then((db) => console.log("**** DB esta conectado ****"))
	.catch((err) => {
		console.log("**** Error con la coneccion con la Base de Datos ****");
		console.log(error);
	});

//* 📦 Exportacion de la Funcion "mongoose" para que lo use "Index.js"
module.exports = mongoose;
