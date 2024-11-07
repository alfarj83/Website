const mongoose = require('mongoose');
// name
// link to article
// publication details
// author(s)
// notes
// tags (for filter system)

const ArticleSchema = new mongoose.Schema( 
    {
        title: {
            type: String,
            required: true,
            default: "",
        },

        authors: [
            {
                type: String,
                required: true,
                default: "",
            }
        ],

        journal: {
            type: String,
            required: true,
            default: "",
        },

        url: {
            type: String,
            required: true,
            default: "",
        },

        notes: {
            type: String,
            required: true,
            default: "",
        },

        tags: [String],
    },
    {
        timestamps: true,
    }
);

// exports schema for index.js
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;