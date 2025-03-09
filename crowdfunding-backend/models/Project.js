const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  goalAmount: Number,
  raisedAmount: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  backers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  image: String,
});


module.exports = mongoose.model("Project", projectSchema);
