const { model, Schema } = require('mongoose');

const ClientSchema = new Schema({
  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateBirthday: {
    type: Date,
    required: true,
  },
});

ClientSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Client', ClientSchema);
