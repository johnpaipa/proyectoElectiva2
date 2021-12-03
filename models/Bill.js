const { model, Schema } = require('mongoose');

const BillSchema = new Schema({
  dateBill: {
    type: Date,
    require: true,
  },
  typePay: {
    type: Boolean,
    require: true
  },
  details: {
    type: [Schema.Types.ObjectId]
  }
});

BillSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Bill', BillSchema);
