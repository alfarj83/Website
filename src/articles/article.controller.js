const Article = require('./article.model.js');

// querying all items
const getAllRefs = async (req, res) => {
    try{
        const refs = await Article.find({}).sort( { title: 1 });
        res.status(200).json(refs);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GETS!");
    }
}

// querying item
const getRef = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = await Article.findById(id);
        res.status(200).json(ref);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// creating item
const createRef = async (req, res) => {
    try {
        const newRef = await Article.create(req.body);
        await newRef.save();
        console.log(req.body); 
        res.status(200).json(newRef);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT POST!");
    }
}

// update item
const updateRef = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = await Article.findByIdAndUpdate(id, req.body, {new: true});
        if (!ref) {
            return res.status(404).json({message: "Article not found"});
        }
        const updatedRef = await Article.findById(id);
        res.status(200).json({
            message: "Book updated successfully",
            ref: updatedRef
        });
    } catch (error) {
        res.status(500).json("ERROR! CANNOT PATCH!");
    }
}

// delete item
const deleteRef = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRef = await Article.findByIdAndDelete(id);
        if (!deletedRef) {
            return res.status(404).json({message: "Article not found"});
        }
        res.status(200).json({
            message: "Article deleted successfully",
            ref: deletedRef
        });
    } catch (error) {
        res.status(500).json("ERROR! CANNOT DELETE!");
    }
}

module.exports = {
    getAllRefs,
    getRef,
    createRef,
    updateRef,
    deleteRef,
};