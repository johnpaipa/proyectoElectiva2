const { model, Schema } = require('mongoose');

const DetailSchema = new Schema({
  id:{
    type:String,
    required:true
  },
  cant: {
    type: Number,
    required: true,
  },
  product:{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
});

DetailSchema.method('toJSON', function () {
  const { __v, _id, id, ...object } = this.toObject();
  object.id = id;
  return object;
});

module.exports = model('Detail', DetailSchema);
