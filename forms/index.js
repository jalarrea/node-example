const express = require("express");
const cors = require("cors"); // Importa CORS

const app = express();
const port = 3000;

// Permitir solicitudes de cualquier origen (para desarrollo)
app.use(cors());

// Middleware para procesar JSON en el body de las solicitudes
app.use(express.json());

app.post("/booking", (req, res) => {
    const { address, customerName, extraInfo } = req.body;

    if (!address || !customerName || !extraInfo) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    console.log("Nueva cita recibida:", { address, customerName, extraInfo });

    res.status(200).json({ message: "Cita agendada correctamente." });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});