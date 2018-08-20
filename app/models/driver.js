var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DriverSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true }, // Reference to the associated book.
    Dob: {type: Date, required: true},
    Maiden name: {type: String, required: true},
   	House Address: {type: String, required: true},
    identification: {type: String, required: true},
   
});

// Virtual for this genre instance URL.
// TransactionSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/genre/'+this._id;
// });

// Export model.
module.exports = mongoose.model('Driver', DriverSchema);
