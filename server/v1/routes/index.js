/** ****************************************
    Module: Routes
    Description: Load all API endpoints
******************************************* */

// Load libraries
const phoneRouter = require('./phone');

module.exports.initRoutes = (app) => {
    app.use('/phone', phoneRouter);
};