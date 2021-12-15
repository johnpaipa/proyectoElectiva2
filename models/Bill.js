const { model, Schema } = require('mongoose');

const BillSchema = new Schema({
  numberBill: {
    type: String,
    required: true,
  },
  dateBill: {
    type: Date,
    required: true,
  },
  typePay: {
    type: Boolean,
    required: true
  },
  details: {
    type: [String]
  }
});

BillSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Bill', BillSchema);
