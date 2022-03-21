const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema(
    {
        likes: {type:integer, default:0},
        coverImage: {type:String, required:true, unique:true},
        content: {type:String, required:true},
        

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("book", bookSchema);