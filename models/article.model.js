const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        tags: [String],

        body: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }

)

module.exports = mongoose.model("Article", ArticleSchema);