var mongoose = require("mongoose");
var refusrSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "refpst"
    }]
});
module.exports = mongoose.model("refusr", refusrSchema);
