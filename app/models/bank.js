var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BankSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true }, // Reference to the associated book.
   acctname: {type: String, required: true},
    acctnum: {type: String, required: true},
   bvn: {type: String, required: true},
    bankname: {type: String, required: true},
   
});

// Virtual for this genre instance URL.
// TransactionSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/genre/'+this._id;
// });

// Export model.
module.exports = mongoose.model('Bank', BankSchema);
