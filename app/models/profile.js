var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
	unique_id:Number,
    displayname: {type: String, required: true},
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    image: {type: String, required: true},
    created_at: {
		type: Date,
		default: Date.now
	}
    
});

// Virtual for this book instance URL.
// ProfileSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/'+this._id;
// });

// Export model.
module.exports = mongoose.model('Profile', ProfileSchema);
