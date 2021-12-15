const { model, Schema } = require('mongoose');

const ProductSchema = new Schema({
  idProduct: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  stockMin: {
    type: Number,
    default: 5
  },
  dateExpired: {
    type: String,
    required: true,
  },
  typeProduct: {
    type: String,
    enum: ['VIVERES', 'LICORES', 'MEDICINAS', 'ASEO'],
    required: true,
  }
});

ProductSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Product', ProductSchema);
