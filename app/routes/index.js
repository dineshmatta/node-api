const reservationRoutes = require('./reservation_routes');

module.exports = function(app, db) {
  reservationRoutes(app, db);
  // Other route groups could go here, in the future
};