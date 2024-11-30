const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema( 
    {
        title: {
          type: String,
          required: true
        },

        journalBookTitle: {
          type: String,
          required: true
        },

        publishedYear: {
          type: Number,
          required: true
        },

        publishedMonth: {
          type: String,
            enum: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ],
          required: true
        },

        volume: {
          type: Number,
          required: false
        },

        Number: {
          type: Number,
          required: false
        },

        annotation: {
          type: String,
          required: true
        },

        tags: {
            type: Array,
            items: {
            type: String
          },
          required: false
        },

        latexNotes: {
          type: Array,
          items: {
            type: String
          },
          required: false,
          description: "Array of LaTeX file paths"
        },

        pdfVersion: {
            fileName: String,
            url: String,
            size: Number,
            description: "Array of PDF file paths"
        },
        
        githubUrl: {
          type: String,
          required: false,
          description: "Optional URL for GitHub commit link"
        }
      }
);

// exports schema for index.js
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;