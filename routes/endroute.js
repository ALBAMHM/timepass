const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a Endroute</h1>
    <p>Estás en la ruta /endroute</p>
  `);
});

module.exports = router;