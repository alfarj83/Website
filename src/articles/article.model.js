const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema( 
    {
        title: {
          type: "string",
          required: true
        },

        journalBookTitle: {
          type: "string",
          required: true
        },

        publishedYear: {
          type: "number",
          required: true
        },

        publishedMonth: {
          type: "string",
            enum: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ],
          required: true
        },

        volume: {
          type: "number",
          required: false
        },

        numbe: {
          type: "number",
          required: false
        },

        annotation: {
          type: "string",
          required: true
        },

        tags: {
            type: "array",
          items: {
            type: "string"
          },
          required: false
        },

        latexNotes: {
          type: "array",
          items: {
            type: "string"
          },
          required: false,
          description: "Array of LaTeX file paths"
        },

        pdfVersion: {
          type: "array",
          items: {
            type: "string"
          },
          required: false,
          description: "Array of PDF file paths"
        },
        
        githubUrl: {
          type: "string",
          required: false,
          description: "Optional URL for GitHub commit link"
        }
      }
);

// exports schema for index.js
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;