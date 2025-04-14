const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rol: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
