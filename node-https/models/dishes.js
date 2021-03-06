const mongoose = require('mongoose'),
  Schema = mongoose.Schema
require('mongoose-currency').loadType(mongoose)
const Currenncy = mongoose.Types.Currenncy
var commentSchema = new Schema({
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    author: {
      // type: String,
      // required: true
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }),
  dishSchema = new Schema({
    name: {
      type: String,
      require: true,
      unique: true
    },
    description: {
      type: String,
      require: true
    },
    comments: [commentSchema]
  },
  {
    timestamps: true
  })

var Dishes = mongoose.model('Dish', dishSchema)
module.exports = Dishes