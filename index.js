const express = require('express');
const sequelize = require('./config');
const prestamosRouter = require('./routes/prestamos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/prestamos', prestamosRouter);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
});
/*par2*/