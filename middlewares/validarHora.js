const validarHora = (req, res, next) => {
    const horaActual = res.locals.horaActual;
    if (horaActual >= 12 && horaActual < 24) {
      next();
    } else {
      res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  };
  
  module.exports = validarHora;