const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || '';
  const horaActual = new Date().toLocaleTimeString();

  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${horaActual}</p>
    <form action="/endroute" method="post">
      <button type="submit">Ir a Endroute</button>
    </form>
    <p>${mensaje}</p>
  `);
});

module.exports = router;