const Express = require('express');
const App     = Express();
const PORT    = 8000;
const Router = require('./sys/router.js');

App.set('view engine', 'ejs');
App.set('views', __dirname + '/application/mvc/views');
App.use(Express.static(__dirname + '/assets'));

App.use('/', Router);


App.listen(PORT, () => console.log(`Connected to port ${PORT}`));