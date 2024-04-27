const horaMiddleware = (req, res, next) => {
    res.locals.horaActual = new Date().getHours();
    next();
  };
  
  module.exports = horaMiddleware;