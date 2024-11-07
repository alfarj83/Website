// WIP!
const mongoose = require('mongoose');
// name
// link to code repository
// author(s)
// notes about experiment

const CodeSchema = new mongoose.Schema( 
    {
        name: {
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

        respository: {
            type: String,
            required: true,
            default: "",
        },

        notes: {
            type: String,
            required: true,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

// exports schema for index.js
const CodeExperiment = mongoose.model("Experiment", CodeSchema);
module.exports = CodeExperiment;