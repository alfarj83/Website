const CodeExperiment = require('../../../code-database/code.model');

// querying all items
const getExperiments = async (req, res) => {
    try{
        const codebase = await CodeExperiment.find({});
        res.status(200).json(codebase);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// querying item
const getExperiment = async (req, res) => {
    try {
        const { id } = req.params;
        const code = await CodeExperiment.findById(id);
        res.status(200).json(code);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// creating item
const createExperiment = async (req, res) => {
    try {
        const code = await CodeExperiment.create(req.body);
        res.status(200).json(code);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// update item
const updateExperiment = async (req, res) => {
    try {
        const { id } = req.params;
        const code = await CodeExperiment.findByIdAndUpdate(id, req,body);
        if (!code) {
            return res.status(404).json({message: "Codebase not found"});
        }
        const updatedCode = await CodeExperiment.findById(id);
        res.status(200).json(updatedCode);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// delete item
const deleteExperiment = async (req, res) => {
    try {
        const { id } = req.params;
        const code = findByIdAndDelete(id);
        if (!code) {
            return res.status(404).json({message: "Codebase not found"});
        }
        res.status(200).json({message: "Codebase deleted successfully"});
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

module.exports = {
    getExperiments,
    getExperiment,
    updateExperiment,
    deleteExperiment,
    createExperiment,
};