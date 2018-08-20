var mongoose = require('mongoose');
// var moment = require('moment');

var Schema = mongoose.Schema;

var PaymentSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true }, // Reference to the associated book.
    expirydate: {type: String, required: true},
    cardnumber: {type: String, required: true},
    cardtype: {type: String, required: true},
    paymentopt: { type: String, default:'card' },
});

// Virtual for this bookinstance object's URL.
// PaymentSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/bookinstance/'+this._id;
// });


// PaymentSchema
// .virtual('due_back_formatted')
// .get(function () {
//   return moment(this.due_back).format('MMMM Do, YYYY');
// });

// PaymentSchema
// .virtual('due_back_yyyy_mm_dd')
// .get(function () {
//   return moment(this.due_back).format('YYYY-MM-DD');
// });


// Export model.
module.exports = mongoose.model('Payment', PaymentSchema);
