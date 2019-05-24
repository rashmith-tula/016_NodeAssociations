var mongoose = require("mongoose");
var refpstSchema = new mongoose.Schema({ title: String, content: String });
module.exports = mongoose.model("refpst", refpstSchema);
