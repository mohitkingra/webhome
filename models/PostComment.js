var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Comments Model
 * ===================
 */

var PostComment = new keystone.List('PostComment', {
	//label: 'Comments',
    nocreate: true
});

PostComment.add({
	post: { type: Types.Relationship, ref: 'Post', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	date: { type: Types.Date, default: Date.now, index: true },
	content: { type: Types.Html, wysiwg: true, height:300},
	commentState: {type: Types.Select, options: ['published', 'draft', 'archived'], default: 'published', index: true},
    publishedOn: {type: Types.Date, default: Date.now, noedit: true, index: true},
});

PostComment.schema.pre('save', function (next) {
    this.wasNew = this.isNew;
    if (!this.isModified('publishedOn') && this.isModified('commentState') && this.commentState === 'published') {
        this.publishedOn = new Date();
    }
    next();
});

PostComment.schema.post('save', function () {
    if (!this.wasNew)
        return;
    if (this.author) {
        keystone.list('User').model.findById(this.author).exec(function (err, user) {
            if (typeof user !== "undefined" && user) {
                user.wasActive().save();
            }
        });
    }
});

/**
 * Registration
 * ============
 */
PostComment.track = true;
PostComment.defaultColumns = 'post, author, date|20%';
PostComment.register();
