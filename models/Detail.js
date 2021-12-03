const { model, Schema } = require('mongoose');

const DetailSchema = new Schema({
  cant: {
    type: Number,
    require: true,
  },
  product:{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
});

DetailSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Detail', DetailSchema);
