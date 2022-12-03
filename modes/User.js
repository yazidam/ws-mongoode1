const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
});

module.exports = User = model("User", userSchema);
