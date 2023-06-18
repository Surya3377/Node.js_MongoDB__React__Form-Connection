const mongoose = require("mongoose");

const brandNameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("BrandName", brandNameSchema);
