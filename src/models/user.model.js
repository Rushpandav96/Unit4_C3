const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: false},
        age: {type: interger, requiured: true},
        email: {type: String, required:true, unique:true},
        profielImages: {type:String, required: true},

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);