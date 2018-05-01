var keystone = require('keystone'),
	async =  require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Post').model.findOne({
			state: 'published',
			slug: locals.filters.post,
		}).populate('author categories');

		q.exec(function (err, result) {
			locals.data.post = result;
			next(err);
		});

	});
/*
	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});

	});

	*/

	// Load comments on the Post
	view.on('init', function (next) {

		var q = keystone.list('PostComment').model.find()
			.where('post', locals.data.post)
			.where('commentState', 'published')
			.where('author').ne(null)
			.populate('author', 'name photo')
			.sort('-publishedOn');

		q.exec(function (err, comments) {
					if (err) return res.err(err);
					if (!comments) return res.notfound('Post comments not found');
					locals.data.comments = comments;
					next();
			});
	});

	view.on('post', { action: 'create-comment' }, function(next) {

		var newuser = null;

		async.series([
			
			function(cb) {
				
				if (!req.body.firstname || !req.body.email) {
					req.flash('error', 'Please enter a name, email and password.');
					return cb(true);
				}
				
				return cb();
				
			},
			
			function(cb) {
				
				keystone.list('User').model.findOne({ email: req.body.email }, function(err, user) {
					
					if (err || user) {
						newuser = user;
						return cb(true);
					}
					
					return cb();
					
				});
				
			},
			
			function(cb) {
			
				var userData = {
					name: {
						first: req.body.firstname,
					},
					email: req.body.email,					
				};
				
				var User = keystone.list('User').model,
					newUser = new User(userData);
				
				newUser.save(function(err) {
					return cb(err);
				});

				newuser = newUser;
			
			}
			
		], function(err){
			
			var newPostComment = keystone.list('PostComment').model({
				state: 'published',
				post: locals.data.post,
				author: newuser
			});

			var updater = newPostComment.getUpdateHandler(req);

			updater.process(req.body, {
				flashErrors: true,
				logErrors: true,
				fields: 'content'
			}, function(err) {
				if (err) {
					locals.validationErrors = err.errors;
				} else {
					//req.flash('success', 'Your comment has been added successfully');
					return res.redirect('/blog/post/' + locals.filters.post + '#comment-id-' + newPostComment.id);
				}
				next();
			});
		});
	});
	
		// Delete a Comment
	view.on('get', {remove: 'comment'}, function (next) {

			if (!req.user) {
					req.flash('error', 'You must be signed in to delete a comment.');
					return next();
			}

			keystone.list('PostComment').model.findOne({
					_id: req.query.comment,
					post: locals.data.post,
			})
			.exec(function (err, comment) {
					if (err) {
							if (err.name === 'CastError') {
									req.flash('error', 'The comment ' + req.query.comment + ' could not be found.');
									return next();
							}
							return res.err(err);
					}
					if (!comment) {
							req.flash('error', 'The comment ' + req.query.comment + ' could not be found.');
							return next();
					}
					if (comment.author != req.user.id) {
							req.flash('error', 'Sorry, you must be the author of a comment to delete it.');
							return next();
					}
					comment.commentState = 'archived';
					comment.save(function (err) {
							if (err)
									return res.err(err);
							req.flash('success', 'Your comment has been deleted.');
							return res.redirect('/blog/post/' + locals.filters.post);
					});
			});
	});

	// Render the view
	view.render('post');
};
