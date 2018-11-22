var keystone = require('keystone');
var url = require('url');

exports = module.exports = function (req, res) {

        var view = new keystone.View(req, res);
        var locals = res.locals;

        // locals.section is used to set the currently selected
        // item in the header navigation.
        locals.section = 'yourtravelerguy';

        // Render the view
        view.render('yourtravelerguy');
};
