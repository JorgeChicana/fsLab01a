const express = require('express');
const app = express();

app.get(["/","/api"], (req, res) => {
  res.send({ mensaje: "Hola desde Express (Org.Jorge Chicana)" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo ${PORT}`));
