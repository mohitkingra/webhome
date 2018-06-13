/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
const { parse } = require('url');

/*
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	auth: importRoutes('./auth'),
};
*/

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {
	
	/*
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.all('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	
	app.all('/join', routes.views.session.join);
	app.all('/signin', routes.views.session.signin);
	app.get('/signout', routes.views.session.signout);
	
	app.all('/auth/confirm', routes.auth.confirm);
	app.all('/auth/app', routes.auth.app);
	app.all('/auth/:service', routes.auth.service);

	app.all('/notification-center', routes.views.notificationcenter);
	*/
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	const handle = nextApp.getRequestHandler();

	keystoneApp.get('*', (req, res) => {

		const parsedUrl = parse(req.url, true);
		const { pathname, query } =  parsedUrl;
		
		if(pathname === '/blog/:category?') {
			nextApp.render(req, res, '/blog', query);
		}
		else if(pathname === '/blog/post/:post') {
			nextApp.render(req, res, '/post', query);
		}
		else if(pathname === '/gallery') {
			nextApp.render(req, res, '/gallery', query);
		}
		else if(pathname === '/contact') {
			nextApp.render(req, res, '/contact', query);
		}
		else if(pathname === '/join') {
			nextApp.render(req, res, '/join', query);
		}
		else if(pathname === '/signin') {
			nextApp.render(req, res, '/signin', query);
		}
		else if(pathname === '/signout') {
			nextApp.render(req, res, '/signout', query);
		}
		else if(pathname === '/notification-center') {
			nextApp.render(req, res, '/notificationcenter', query);
		}
		else {
			return handle(req, res);		
		}
	
	});

};
