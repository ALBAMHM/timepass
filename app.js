const express = require('express');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/endroute', horaMiddleware, validarHora, endrouteRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000');
});