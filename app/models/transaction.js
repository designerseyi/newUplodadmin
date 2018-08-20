var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true }, // Reference to the associated book.
    startloc: {type: String, required: true},
    endloc: {type: String, required: true},
    status: {type: String, required: true},
    paymentopt: { type: Schema.ObjectId, ref: 'Payment', required: true  },
});

// Virtual for this genre instance URL.
// TransactionSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/genre/'+this._id;
// });

// Export model.
module.exports = mongoose.model('Transaction', TransactionSchema);
