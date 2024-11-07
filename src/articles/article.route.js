const express = require("express");
const router = express.Router();
const {getAllRefs, getRef, createRef, updateRef, deleteRef} = require('./article.controller.js');

// query all items
router.get('/', getAllRefs);

// query one item
router.get('/:id', getRef);

// create item
router.post('/create-reference', createRef);

// update item
router.put('/edit/:id', updateRef);

// delete item
router.delete('/:id', deleteRef);

module.exports = router;