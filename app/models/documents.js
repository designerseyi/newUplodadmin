var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    driverLicense: {type: String, required: true},
    nationalId: {type: String, required: true},
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
module.exports = mongoose.model('Documents', DocumentSchema);
