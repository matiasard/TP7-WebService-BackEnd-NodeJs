const express = require("express");
const cors = require("cors");
const { mongoose } = require("./database");

const app = express();

//* middlewares
app.use(express.json());
app.use(cors({ origin: "https://localhost:4200" }));

//* Cargamos el modulo de direccionamiento de rutas
app.use("/api/agente", require("./routes/agente.route"));
app.use("/api/libro", require("./routes/libro.route"));
app.use("/api/transaccion", require("./routes/transaccion.route"));
app.use("/api/persona", require("./routes/persona.route"));
app.use("/api/pasaje", require("./routes/pasaje.route"));

//* Setting
app.set("port", process.env.PORT || 3000);
// const port = process.env.PORT || 3000;

//* Starting the server
app.listen(app.get("port"), () => {
	console.log("Server started on port", app.get("port"));
});
// app.listen(port, () => {
// 	console.log(`Server started on port: ${port}}`);
// });
