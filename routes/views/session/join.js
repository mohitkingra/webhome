var keystone = require('keystone'),
	Email = require('keystone-email');
	async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'session';
	locals.form = req.body;
	
	view.on('post', { action: 'join' }, function(next) {
		
		async.series([
			
			function(cb) {
				
				if (!req.body.firstname || !req.body.email || !req.body.password) {
					req.flash('error', 'Please enter a name, email and password.');
					return cb(true);
				}
				
				return cb();
				
			},
			
			function(cb) {
				
				keystone.list('User').model.findOne({ email: req.body.email }, function(err, user) {
					
					if (err || user) {
						req.flash('error', 'User already exists with that email address.');
						return cb(true);
					}
					
					return cb();
					
				});
				
			},
			
			function(cb) {
			
				var userData = {
					name: {
						first: req.body.firstname,
						last: req.body.lastname,
					},
					email: req.body.email,
					password: req.body.password,
					
					website: req.body.website
				};
				
				var User = keystone.list('User').model,
					newUser = new User(userData);
				
				newUser.save(function(err) {
					return cb(err);
				});
			
			}
			
		], function(err){
			
			if (err) return next();
			
			var onSuccess = function() {

				new Email("templates/emails/subscriber.pug", { 
						transport: 'mailgun', }).send({}, {
							apiKey: process.env.MAILGUN_API_KEY,
							domain: process.env.MAILGUN_DOMAIN,
							subject:'Notification from mohitkingra.com', 
							to: req.body.email,
							from: {
								name: 'Mohit Kingra',
								email: 'mohit@mohitkingra.com'
							},
						}, function(err) {
							if (err) {
								next();
							} else {
								req.flash('success', 'Email sent to ' + req.body.firstname) 
							}
				});

				res.redirect('/');
			}
			
			var onFail = function(e) {
				req.flash('error', 'There was a problem signing you in, please try again.');
				return next();
			}
			
			keystone.session.signin({ email: req.body.email, password: req.body.password }, req, res, onSuccess, onFail);
			
		});
		
	});
	
	view.render('session/join');
	
}
