const express = require("express");
const Article = require("../research-database/article.model.js");
const router = express.Router();
const {getRefs, getRef, createRef, updateRef, deleteRef} = require('../controllers/article.controller.js');

// query all items
router.get('/', getRefs);

// query one item
router.get('/:id', getRef);

// create item
router.post('/', createRef);

// update item
router.put('/:id', updateRef);

// delete item
router.delete('/:id', deleteRef);

module.exports = router;