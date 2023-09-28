let routes = {};


/**
 * Routes are key value pair.
 * The key is the path. 
 * The value is an array with two indexes, the first index is the class and method (eg. '/class/method'),
 * The second index is the HTTP method
 * (GET, POST, PUT, DELETE)
 * 
 * IMPORTANT: make sure that the class and method exists
 */

routes['/'] = ['players/index', 'GET'];
routes['/search'] = ['players/search', 'GET'];

module.exports = routes;