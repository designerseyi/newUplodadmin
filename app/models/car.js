var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema({
    // user: { type: Schema.ObjectId, ref: 'User', required: true }, // Reference to the associated book.
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    carname: {type: String, required: true},
    cartype: {type: String, required: true},
    carmake: {type: String, required: true},
    carcolor: {type: String, required: true},
    caryear: {type: String, required: true},
    carplatenum: {type: String, required: true},
   
});

// Virtual for this genre instance URL.
// TransactionSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/genre/'+this._id;
// });

// Export model.
module.exports = mongoose.model('Car', CarSchema);
