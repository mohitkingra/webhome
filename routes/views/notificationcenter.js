var keystone = require('keystone'),
	Email = require('keystone-email');
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
		locals.section = 'notificationcenter';


	// Keep it secret, keep it safe

	if (!req.user || req.user && !req.user.isAdmin) {
		console.warn('===== ALERT =====');
		console.warn('===== A non-admin attempted to access the Notification Center =====');
		return res.redirect('/');
	}


	// Get all subscribers
	
	view.on('init', function(next) {
		keystone.list('User').model
			.where('notifications.posts', true)
			.exec(function(err, subscribers) {
				locals.subscribers = subscribers;
				next();
			});
	});

	// Notify all my subscribers

	view.on('post', { action: 'notify.subscriber' }, function(next) {

		if (!locals.subscribers) {
			req.flash('warning', 'There aren\'t any subscribers at the moment' );
			return next();
			} else {

				var template = req.body._email_type;
				var templatePath = "templates/emails/" + template + ".pug";

				async.each(locals.subscribers, function(subscriber, doneSubscriber) {
					var subscriberEmail = subscriber.email;
					new Email(templatePath, { 
						transport: 'mailgun', }).send({}, {
							apiKey: process.env.MAILGUN_API_KEY,
							domain: process.env.MAILGUN_DOMAIN,
							subject:'Notification from mohitkingra.com', 
							to: subscriberEmail,
							from: {
								name: 'Mohit Kingra',
								email: 'mohit@mohitkingra.com'
							},
					}, function(err) {
						if (err) {
							next();
							} else {
								req.flash('success', 'Email sent to ' + keystone.utils.plural(locals.subscribers.length, '* subscriber'));
						}
					});
				});
			}
	});

	view.render('notificationcenter');
};
