const { model, Schema } = require('mongoose');

const ProductSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  stockMin: {
    type: Number,
    default: 5
  },
  dateExpired: {
    type: Date
  },
  typeProduct: {
    type: String,
    enum: ['VIVERES', 'LICORES', 'MEDICINAS', 'ASEO']
  }
});

ProductSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Product', ProductSchema);
