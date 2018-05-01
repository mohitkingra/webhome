var _ = require('lodash');
var async = require('async');
var keystone = require('keystone');
var passport = require('passport');
var passportGoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = keystone.list('User');

var credentials = {
	clientID: '997029757555-udt00dfvrkbrj1d36e9406hl7df47s1j.apps.googleusercontent.com',
	clientSecret: 'tiCvg5qOI9xB-jGut55mxZm3',
	callbackURL: 'http://www.mohitkingra.com/auth/google/callback',
	scope: 'profile email'
};

exports.authenticateUser = function(req, res, next) {
	var self = this;

	var redirect = '/auth/confirm';
	if (req.cookies.target && req.cookies.target == 'app') redirect = '/auth/app';

	// Begin process
	console.log('============================================================');
	console.log('[services.google] - Triggered authentication process...');
	console.log('------------------------------------------------------------');

	// Initalise Google credentials
	var googleStrategy = new passportGoogleStrategy(credentials, function(accessToken, refreshToken, profile, done) {
		done(null, {
			accessToken: accessToken,
			refreshToken: refreshToken,
			profile: profile
		});
	});

	// Pass through authentication to passport
	passport.use(googleStrategy);

	// Save user data once returning from Google
	if (_.has(req.query, 'cb')) {

		console.log('[services.google] - Callback workflow detected, attempting to process data...');
		console.log('------------------------------------------------------------');

		passport.authenticate('google', { session: false }, function(err, data, info) {

			if (err || !data) {
				console.log("[services.google] - Error retrieving Google account data - " + JSON.stringify(err));
				return res.redirect('/signin');
			}

			console.log('[services.google] - Successfully retrieved Google account data, processing...');
			console.log('------------------------------------------------------------');

			var auth = {
				type: 'google',

				name: {
					first: data.profile.name.givenName,
					last: data.profile.name.familyName
				},

				email: data.profile.emails.length ? _.first(data.profile.emails).value : null,

				website: data.profile._json.blog,

				profileId: data.profile.id,

				username: data.profile.username,
				avatar: data.profile._json.picture,

				accessToken: data.accessToken,
				refreshToken: data.refreshToken
			}

			req.session.auth = auth;

			return res.redirect(redirect);

		})(req, res, next);

	// Perform inital authentication request to Google
	} else {

		console.log('[services.google] - Authentication workflow detected, attempting to request access...');
		console.log('------------------------------------------------------------');

		passport.authenticate('google', { accessType: 'offline' })(req, res, next); // approvalPrompt: 'force'

	}

};
